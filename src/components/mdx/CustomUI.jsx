import React from 'react';

// Timeline Components
export const Timeline = ({ children }) => {
  return (
    <div className="my-8 flex flex-col not-prose">
      {children}
    </div>
  );
};

export const TimelineItem = ({ step, title, children, status, isLast }) => {
  let colorClass = 'border-neutral-300 text-neutral-500';
  let dotClass = 'border-neutral-300';
  let textClass = 'text-neutral-500';

  if (step === '01') {
    colorClass = 'border-red-400';
    dotClass = 'border-red-500';
    textClass = 'text-red-500';
  } else if (step === '02') {
    colorClass = 'border-amber-400';
    dotClass = 'border-amber-500';
    textClass = 'text-amber-500';
  } else if (step === '03') {
    colorClass = 'border-emerald-500';
    dotClass = 'border-emerald-600';
    textClass = 'text-emerald-600';
  } else if (status) {
    colorClass = 'border-blue-400';
    dotClass = 'border-blue-500';
    textClass = 'text-blue-500';
  }

  return (
    <div className={`relative pl-8 pb-8 ${!isLast ? `border-l-2 break-words ${colorClass}` : 'border-l-2 border-transparent'} ml-3`}>
      <div className={`absolute left-[-6px] top-1.5 w-3 h-3 rounded-full border-[2.5px] bg-[#f8f4ec] dark:bg-neutral-900 ${dotClass}`} />
      <div className={`text-xs font-mono font-bold tracking-[0.2em] mb-2 uppercase ${textClass}`}>
        {status ? 'STATUS' : `STEP ${step}`}
      </div>
      <h4 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-3 flex items-center gap-2">
        {title}
        {title.includes('Terbangun') || title.includes('Production') ? (
          <span className="bg-emerald-500 text-white rounded text-xs px-1.5 py-0.5 shadow-sm font-sans inline-flex items-center justify-center">✓</span>
        ) : null}
      </h4>
      <div className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-[15px]">
        {children}
      </div>
    </div>
  );
};

export const TechSection = ({ icon: Icon, title, children, iconBg = "bg-blue-100 dark:bg-blue-900/30", iconColor = "text-blue-600 dark:text-blue-400" }) => {
  return (
    <div className="mt-10 mb-4 not-prose">
      <div className="flex items-center gap-3 mb-5">
        {Icon ? (
          <div className={`w-8 h-8 rounded-full ${iconBg} flex items-center justify-center ${iconColor}`}>
            <Icon className="w-4 h-4" />
          </div>
        ) : (
          <div className={`w-8 h-8 rounded-full ${iconBg} flex items-center justify-center ${iconColor}`}>
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
          </div>
        )}
        <h3 className="text-xl font-bold text-neutral-900 dark:text-white m-0">{title}</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
        {children}
      </div>
    </div>
  );
};

export const TechCard = ({ title, description }) => {
  return (
    <div style={{ borderLeftWidth: '3px', borderLeftColor: '#c4b5a0' }} className="bg-[#f0ece1]/40 dark:bg-neutral-800/30 border border-neutral-200/70 dark:border-neutral-700/50 rounded-xl p-5 hover:shadow-md transition-all duration-300 group">
      <h4 className="text-sm font-bold font-mono text-neutral-800 dark:text-neutral-100 mb-2.5 group-hover:text-blue-600 dark:group-hover:text-amber-400 transition-colors tracking-wide">
        {title}
      </h4>
      <p className="text-neutral-600 dark:text-neutral-400 text-[13.5px] leading-relaxed m-0 font-sans">
        {description}
      </p>
    </div>
  );
};

// AI Highlight Card
export const AIHighlightCard = ({ title, children }) => {
  return (
    <div className="mt-10 mb-4 not-prose">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-8 h-8 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-violet-600 dark:text-violet-400">
          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
        </div>
        <h3 className="text-xl font-bold text-neutral-900 dark:text-white m-0">{title}</h3>
      </div>
      <div className="bg-amber-50/60 dark:bg-neutral-800/40 border border-amber-200/60 dark:border-neutral-700/50 rounded-xl p-6">
        <div className="text-[11px] font-mono font-bold tracking-[0.2em] text-amber-600/80 dark:text-amber-400/60 mb-3 uppercase italic">
          // YANG PALING SERU DI-BUILD - BIKIN TETANGGA GAK PUNYA :p
        </div>
        <div className="text-neutral-700 dark:text-neutral-300 text-[14.5px] leading-relaxed font-sans">
          {children}
        </div>
      </div>
    </div>
  );
};

// Chat Screenshot Component
export const ChatScreenshot = ({ label, sender, senderMessage, replyFrom, replyMessage, screenshotCaption }) => {
  return (
    <div className="my-8 not-prose bg-[#f0ece1]/40 dark:bg-neutral-800/30 border border-neutral-200/70 dark:border-neutral-700/50 rounded-2xl p-5 max-w-xl mx-auto">
      {/* Label */}
      <div className="text-[10px] font-mono tracking-[0.15em] text-neutral-400 dark:text-neutral-500 mb-5 uppercase">
        {label}
      </div>

      {/* Sender bubble */}
      <div className="mb-4">
        <div className="text-xs font-semibold text-neutral-600 dark:text-neutral-400 mb-1.5">{sender}</div>
        <div className="bg-white dark:bg-neutral-700 rounded-2xl rounded-tl-md px-4 py-3 max-w-[75%] text-sm text-neutral-800 dark:text-neutral-200 shadow-sm border border-neutral-100 dark:border-neutral-600">
          {senderMessage}
        </div>
      </div>

      {/* Screenshot caption */}
      {screenshotCaption && (
        <div className="flex justify-center my-4">
          <div className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">{screenshotCaption}</div>
        </div>
      )}

      {/* Reply bubble */}
      {replyFrom && (
        <div className="flex flex-col items-end">
          <div className="text-xs font-semibold text-neutral-600 dark:text-neutral-400 mb-1.5">{replyFrom}</div>
          <div className="bg-emerald-600 dark:bg-emerald-700 rounded-2xl rounded-tr-md px-4 py-3 max-w-[75%] text-sm text-white shadow-sm">
            {replyMessage}
          </div>
        </div>
      )}
    </div>
  );
};

// Infra Diagram Component
export const InfraDiagram = () => {
  return (
    <div className="bg-[#0f1110] p-6 rounded-2xl col-span-1 border border-neutral-800 my-8 not-prose shadow-2xl">
      <div className="text-[10px] font-mono tracking-[0.2em] text-neutral-500 mb-8 uppercase">
        VPS Dedicated — From Nusanode.com
      </div>

      <div className="flex flex-col items-center justify-center w-full max-w-2xl mx-auto">
        {/* Nginx Block */}
        <div className="bg-neutral-900/50 border border-neutral-700/80 rounded-xl p-4 w-full text-center" style={{ maxWidth: '70%' }}>
          <div className="font-bold text-neutral-200 text-base font-mono">Nginx</div>
          <div className="text-neutral-500 text-[11px] font-mono mt-1">Reverse proxy + SSL termination</div>
        </div>

        {/* Arrow */}
        <div className="text-neutral-600 my-2.5 text-sm">↓</div>

        {/* Docker Containers */}
        <div className="flex gap-3 w-full md:flex-col">
          <div className="bg-blue-950/20 border border-blue-900/50 rounded-xl p-4 text-center flex-1">
            <div className="font-bold text-blue-100 text-sm mb-1 font-mono">hitaid-web</div>
            <div className="text-blue-400/70 text-[11px] font-mono flex flex-col gap-0.5">
              <span>Next.js • Docker</span>
              <span>Container • Port Custom</span>
            </div>
          </div>

          <div className="bg-purple-950/20 border border-purple-900/50 rounded-xl p-4 text-center flex-1">
            <div className="font-bold text-purple-100 text-sm mb-1 font-mono">hitaid-agent</div>
            <div className="text-purple-400/70 text-[11px] font-mono flex flex-col gap-0.5">
              <span>Python AI • Docker</span>
              <span>Container • LiveKit</span>
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div className="text-neutral-600 my-2.5 text-sm">↓</div>

        {/* Supabase Block */}
        <div className="bg-[#061b11]/60 border border-emerald-900/50 rounded-xl p-4 text-center" style={{ width: '85%' }}>
          <div className="font-bold text-emerald-100 text-sm flex items-center justify-center gap-2 font-mono">
            Supabase Cloud <span className="text-emerald-500">•</span> Singapore SG
          </div>
          <div className="text-emerald-500/70 text-[11px] font-mono mt-1.5">PostgreSQL + Auth + Storage + Realtime</div>
        </div>
      </div>
    </div>
  );
};

// Quote Block Component
export const QuoteCard = ({ text, author }) => {
  return (
    <div className="bg-[#111111] dark:bg-[#111111] rounded-2xl p-7 my-8 relative not-prose overflow-hidden shadow-xl border border-neutral-800">
      <div className="text-orange-500 text-5xl font-serif leading-none absolute top-5 left-5 select-none opacity-80">
        &ldquo;
      </div>
      <p className="text-white text-lg font-medium leading-relaxed mt-6 mb-6 ml-2 relative z-10" style={{ marginLeft: '1.5rem' }}>
        {text}
      </p>
      <div className="flex items-center text-neutral-500 text-[11px] font-mono tracking-[0.15em]" style={{ marginLeft: '1.5rem' }}>
        <span className="mr-3">—</span>
        <span className="uppercase">{author}</span>
      </div>
    </div>
  );
};
