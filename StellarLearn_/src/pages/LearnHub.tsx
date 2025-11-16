import { Sidebar } from '../components/Sidebar';
import { Upload, FileText, Youtube, MessageCircle, Download, Sparkles } from 'lucide-react';
import { useState } from 'react';

export const LearnHub = () => {
  const [activeTab, setActiveTab] = useState<'upload' | 'notes' | 'questions' | 'mentor'>('upload');
  const [isProcessing, setIsProcessing] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [youtubeUrl, setYoutubeUrl] = useState('');

  const GlassCard = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
    <div className={`backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl ${className}`}>
      {children}
    </div>
  );

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setUploadedFile(file);
      processContent();
    }
  };

  const handleYoutubeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (youtubeUrl.trim()) {
      processContent();
    }
  };

  const processContent = () => {
    setIsProcessing(true);
    // Simulate processing delay
    setTimeout(() => {
      setIsProcessing(false);
      setActiveTab('notes');
    }, 2000);
  };

  // Mock data for demonstration
  const generatedNotes = `
# Algebra Basics

## Key Concepts
- **Variables**: Symbols that represent unknown values
- **Equations**: Mathematical statements showing equality
- **Expressions**: Combinations of numbers and variables

## Important Formulas
- Quadratic Formula: x = [-b ± √(b² - 4ac)] / 2a
- Slope-intercept: y = mx + b

## Summary
Algebra forms the foundation for advanced mathematics and problem-solving.
  `.trim();

  const generatedQuestions = [
    {
      id: 1,
      question: "What is the value of x in 2x + 5 = 15?",
      type: "short-answer",
      difficulty: "easy"
    },
    {
      id: 2,
      question: "Solve the quadratic equation: x² - 5x + 6 = 0",
      type: "step-by-step",
      difficulty: "medium"
    },
    {
      id: 3,
      question: "Which of the following is a linear equation?",
      options: ["y = x²", "y = 2x + 3", "y = sin(x)"],
      type: "multiple-choice",
      difficulty: "easy"
    }
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-black via-[#0A0F2D] to-black">
      <Sidebar />
      
      <main className="flex-1 p-4 md:p-8 pt-20 md:pt-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">LearnHub</h1>
              <p className="text-white/60">Upload content and generate smart study materials</p>
            </div>
            
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-2xl">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-white text-sm">AI Powered</span>
            </div>
          </div>

          {/* Navigation Tabs */}
          <GlassCard className="p-2">
            <div className="flex space-x-1">
              {[
                { id: 'upload', label: 'Upload', icon: Upload },
                { id: 'notes', label: 'Notes', icon: FileText },
                { id: 'questions', label: 'Questions', icon: MessageCircle },
                { id: 'mentor', label: 'AI Mentor', icon: MessageCircle }
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id as any)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-2xl transition-all flex-1 text-sm font-medium ${
                    activeTab === id
                      ? 'bg-white/20 text-white'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </button>
              ))}
            </div>
          </GlassCard>

          {/* Content Area */}
          <div className="space-y-6">
            {/* Upload Tab */}
            {activeTab === 'upload' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* PDF Upload */}
                <GlassCard className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="w-6 h-6 text-white" />
                    <h3 className="text-xl font-bold text-white">Upload PDF</h3>
                  </div>
                  
                  <label className="block">
                    <div className="border-2 border-dashed border-white/20 rounded-2xl p-8 text-center cursor-pointer hover:border-white/40 transition-colors">
                      <Upload className="w-12 h-12 text-white/40 mx-auto mb-4" />
                      <p className="text-white font-medium mb-2">Upload PDF Document</p>
                      <p className="text-white/60 text-sm">Click to browse or drag & drop</p>
                      <p className="text-white/40 text-xs mt-2">Supports .pdf files</p>
                    </div>
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </label>

                  {uploadedFile && (
                    <div className="mt-4 p-3 bg-white/5 rounded-2xl border border-white/10">
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-white" />
                        <span className="text-white text-sm truncate">{uploadedFile.name}</span>
                      </div>
                    </div>
                  )}
                </GlassCard>

                {/* YouTube URL */}
                <GlassCard className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Youtube className="w-6 h-6 text-white" />
                    <h3 className="text-xl font-bold text-white">YouTube Video</h3>
                  </div>
                  
                  <form onSubmit={handleYoutubeSubmit} className="space-y-4">
                    <div>
                      <input
                        type="url"
                        placeholder="Paste YouTube video URL here..."
                        value={youtubeUrl}
                        onChange={(e) => setYoutubeUrl(e.target.value)}
                        className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 focus:border-white/50 focus:bg-white/10 outline-none text-white transition-all"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={!youtubeUrl.trim()}
                      className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                      Process Video
                    </button>
                  </form>
                </GlassCard>
              </div>
            )}

            {/* Notes Tab */}
            {activeTab === 'notes' && (
              <GlassCard className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <FileText className="w-6 h-6 text-white" />
                    <h3 className="text-xl font-bold text-white">Generated Notes</h3>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all">
                    <Download className="w-4 h-4" />
                    Export
                  </button>
                </div>

                {isProcessing ? (
                  <div className="text-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                    <p className="text-white/60">AI is generating your notes...</p>
                  </div>
                ) : (
                  <div className="prose prose-invert max-w-none">
                    <pre className="text-white whitespace-pre-wrap font-sans">{generatedNotes}</pre>
                  </div>
                )}
              </GlassCard>
            )}

            {/* Questions Tab */}
            {activeTab === 'questions' && (
              <GlassCard className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <MessageCircle className="w-6 h-6 text-white" />
                  <h3 className="text-xl font-bold text-white">Practice Questions</h3>
                </div>

                <div className="space-y-4">
                  {generatedQuestions.map((q, index) => (
                    <div key={q.id} className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="flex items-start justify-between mb-3">
                        <span className="text-white font-medium">Question {index + 1}</span>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          q.difficulty === 'easy' ? 'bg-green-500/20 text-green-400' :
                          q.difficulty === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {q.difficulty}
                        </span>
                      </div>
                      <p className="text-white mb-3">{q.question}</p>
                      {q.options && (
                        <div className="space-y-2">
                          {q.options.map((option, i) => (
                            <div key={i} className="flex items-center gap-3 p-2 rounded-xl bg-white/5">
                              <div className="w-4 h-4 rounded border border-white/30" />
                              <span className="text-white/80">{option}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      <button 
                        onClick={() => setActiveTab('mentor')}
                        className="mt-3 text-sm text-white/60 hover:text-white transition-colors"
                      >
                        Need help? Ask AI Mentor →
                      </button>
                    </div>
                  ))}
                </div>
              </GlassCard>
            )}

            {/* AI Mentor Tab */}
            {activeTab === 'mentor' && (
              <GlassCard className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <MessageCircle className="w-6 h-6 text-white" />
                  <h3 className="text-xl font-bold text-white">AI Mentor</h3>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <p className="text-white/60 text-sm mb-2">AI Mentor:</p>
                    <p className="text-white">Hello! I'm here to help you understand any concepts or questions you have. What would you like to know?</p>
                  </div>

                  <div className="flex gap-3">
                    <input
                      type="text"
                      placeholder="Ask me anything about your study material..."
                      className="flex-1 px-4 py-3 rounded-2xl bg-white/5 border border-white/10 focus:border-white/50 focus:bg-white/10 outline-none text-white transition-all"
                    />
                    <button className="px-6 py-3 rounded-2xl bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all">
                      Ask
                    </button>
                  </div>
                </div>
              </GlassCard>
            )}
          </div>

          {/* Processing Overlay */}
          {isProcessing && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
              <GlassCard className="p-8 text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                <h3 className="text-white text-lg font-bold mb-2">Processing Your Content</h3>
                <p className="text-white/60">AI is analyzing and generating study materials...</p>
              </GlassCard>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};