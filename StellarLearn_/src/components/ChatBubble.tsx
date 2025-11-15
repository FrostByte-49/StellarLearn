interface ChatBubbleProps {
  message: string;
  isUser: boolean;
  timestamp?: string;
}

export const ChatBubble = ({ message, isUser, timestamp }: ChatBubbleProps) => {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`max-w-[70%] ${isUser ? 'order-2' : 'order-1'}`}>
        <div
          className={`
            px-6 py-4 rounded-3xl
            ${isUser
              ? 'bg-gradient-to-r from-[#5A00FF] to-[#00E5FF] text-white shadow-[0_0_30px_rgba(0,229,255,0.3)]'
              : 'backdrop-blur-md bg-white/10 text-white border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.2)]'
            }
          `}
        >
          <p className="leading-relaxed">{message}</p>
        </div>
        {timestamp && (
          <p className="text-xs text-[#D3F5FF]/40 mt-2 px-2">
            {timestamp}
          </p>
        )}
      </div>
    </div>
  );
};
