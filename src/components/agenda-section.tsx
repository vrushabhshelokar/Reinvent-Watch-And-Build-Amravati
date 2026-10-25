import React from "react";
import { Clock, AlertCircle, PlayCircle, Code2, Users, Coffee, Sparkles } from "lucide-react";
import { provisionalAgenda, agendaStatus } from "@/data/agenda";
import { RegistrationButton } from "./registration-button";

export function AgendaSection() {
  const getFormatBadge = (type: string) => {
    switch (type) {
      case "Keynote Watch":
        return {
          icon: PlayCircle,
          color: "text-[#ff9900] bg-[#ff9900]/10 border-[#ff9900]/30",
        };
      case "Technical Talk":
        return {
          icon: Code2,
          color: "text-blue-400 bg-blue-400/10 border-blue-400/30",
        };
      case "Builder Demo":
        return {
          icon: Sparkles,
          color: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
        };
      case "Networking & Discussion":
        return {
          icon: Users,
          color: "text-purple-400 bg-purple-400/10 border-purple-400/30",
        };
      default:
        return {
          icon: Coffee,
          color: "text-[#9aa7b8] bg-white/5 border-white/10",
        };
    }
  };

  return (
    <section
      id="agenda"
      aria-label="Event Agenda and Planned Timeline"
      className="py-20 md:py-28 bg-[#0a0d12] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-[#ff9900] mb-3">
            Event Timeline
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#f5f7fa]">
            Agenda &amp; <span className="text-[#ff9900]">Session Flow</span>
          </h2>
          <p className="mt-4 text-base text-[#9aa7b8] leading-relaxed">
            A balanced schedule crafted for student builders: combining high-impact keynote watch party discussions with practical architecture breakdowns.
          </p>
        </div>

        {/* Status Notice Banner */}
        <div className="mb-12 bg-[#121820] border border-[#ff9900]/30 rounded-2xl p-5 flex items-start gap-4">
          <AlertCircle className="w-5 h-5 text-[#ff9900] shrink-0 mt-0.5" aria-hidden="true" />
          <div className="text-sm">
            <span className="font-semibold text-[#f5f7fa]">{agendaStatus.statusLabel}: </span>
            <span className="text-[#9aa7b8]">{agendaStatus.announcementNote}</span>
          </div>
        </div>

        {/* Chronological Timeline Blocks */}
        <div className="relative border-l border-[#242e3d] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-8">
          {provisionalAgenda.map((session, index) => {
            const badge = getFormatBadge(session.type);
            const Icon = badge.icon;
            return (
              <div key={index} className="relative group">
                {/* Timeline node */}
                <div
                  className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#121820] border-2 border-[#ff9900] group-hover:scale-125 transition-transform duration-200"
                  aria-hidden="true"
                />

                <div className="bg-[#121820] border border-[#242e3d] group-hover:border-[#ff9900]/50 rounded-2xl p-6 sm:p-7 transition-all duration-200">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-md bg-[#1a222d] border border-[#334052] font-mono text-xs font-bold text-[#ff9900]">
                        {session.timeEstimate}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${badge.color}`}
                      >
                        <Icon className="w-3.5 h-3.5" aria-hidden="true" />
                        {session.type}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-[#65758a] font-mono">
                      <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>{session.statusNote}</span>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#f5f7fa] group-hover:text-[#ff9900] transition-colors mb-2">
                    {session.blockTitle}
                  </h3>
                  <p className="text-sm text-[#9aa7b8] leading-relaxed max-w-3xl">
                    {session.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Agenda Footer Note */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-between bg-[#121820] border border-[#242e3d] rounded-2xl p-6 gap-4">
          <p className="text-xs sm:text-sm text-[#9aa7b8] text-left">
            Have a student project or open-source cloud build you’d like to showcase? Reach out to present in the Demo Arena!
          </p>
          <RegistrationButton
            placement="agenda"
            size="md"
            label="Reserve Your Spot Today"
            className="shrink-0"
          />
        </div>
      </div>
    </section>
  );
}
