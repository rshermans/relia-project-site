'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SearchIcon, UsersIcon, CodeIcon, BriefcaseIcon, BuildingIcon } from './Icons';

interface TeamMember {
  name: string;
  role: string;
  roleEn: string;
  institution: string;
  isHighlighted?: boolean;
  category: 'research' | 'fellow' | 'ccg' | 'consultant';
  linkedin?: string;
}

const teamMembers: TeamMember[] = [
  // Research Team
  { name: 'Sílvia Lima Gonçalves Araújo', role: 'Investigadora Responsável', roleEn: 'Principal Investigator', institution: 'ELACH | UMinho', isHighlighted: true, category: 'research', linkedin: 'https://www.linkedin.com/in/s%C3%ADlvia-ara%C3%BAjo-95811946/' },
  { name: 'Adelina Moura', role: 'Investigadora', roleEn: 'Researcher', institution: 'Escola Secundária Carlos Amarante', category: 'research', linkedin: 'https://www.linkedin.com/in/adelina-moura-5115686/' },
  { name: 'Ana Ribeiro', role: 'Investigadora', roleEn: 'Researcher', institution: 'ELACH | UMinho', category: 'research' },
  { name: 'João Varajão', role: 'Investigador', roleEn: 'Researcher', institution: 'Escola de Engenharia | UMinho', category: 'research', linkedin: 'https://www.linkedin.com/in/joaovarajao/' },
  { name: 'Maria Micaela Moreira', role: 'Investigadora', roleEn: 'Researcher', institution: 'ELACH | UMinho', category: 'research' },
  { name: 'Micaela Aguiar', role: 'Investigadora', roleEn: 'Researcher', institution: 'FLUP | Universidade do Porto', category: 'research', linkedin: 'https://www.linkedin.com/in/micaela-aguiar-b565b412b/' },
  { name: 'Pedro Miguel Venâncio', role: 'Investigador', roleEn: 'Researcher', institution: 'Escola de Direito | UMinho', category: 'research', linkedin: 'https://www.linkedin.com/in/pedrodiasvenancio' },
  // Research Fellows
  { name: 'Eduardo Mota', role: 'Bolseiro', roleEn: 'Fellow', institution: 'ELACH | UMinho', isHighlighted: true, category: 'fellow' },
  { name: 'Joana Azevedo', role: 'Bolseira', roleEn: 'Fellow', institution: 'ELACH | UMinho', isHighlighted: true, category: 'fellow', linkedin: 'https://www.linkedin.com/in/joana-azevedo-368a78224/' },
  { name: 'Rômulo Sherman', role: 'Bolseiro', roleEn: 'Fellow', institution: 'ELACH | UMinho', isHighlighted: true, category: 'fellow', linkedin: 'https://www.linkedin.com/in/rshermans/' },
  // CCG Team
  { name: 'Hugo Sousa', role: 'Engenharia CCG', roleEn: 'CCG Engineering', institution: 'CCG', category: 'ccg' },
  { name: 'Manuel Santos', role: 'Engenharia CCG', roleEn: 'CCG Engineering', institution: 'CCG', category: 'ccg', linkedin: 'https://www.linkedin.com/in/manuel-santos-34b107b5' },
  { name: 'Rúben Oliveira', role: 'Engenharia CCG', roleEn: 'CCG Engineering', institution: 'CCG', category: 'ccg' },
  { name: 'Rui Ribeiro', role: 'Engenharia CCG', roleEn: 'CCG Engineering', institution: 'CCG', category: 'ccg' },
  { name: 'Tiago Castro', role: 'Engenharia CCG', roleEn: 'CCG Engineering', institution: 'CCG', category: 'ccg' },
  // Consultants
  { name: 'Aida Alves', role: 'Consultora', roleEn: 'Consultant', institution: 'Biblioteca Lúcio Craveiro da Silva', isHighlighted: true, category: 'consultant', linkedin: 'https://www.linkedin.com/in/aida-alves-9a6341252/' },
  { name: 'Francisco Lopes', role: 'Consultor', roleEn: 'Consultant', institution: 'ELACH — Universidade do Minho', isHighlighted: true, category: 'consultant', linkedin: 'https://www.linkedin.com/in/jitendra-raut/' },
  { name: 'Regina Campos', role: 'Consultora', roleEn: 'Consultant', institution: 'Rede de Bibliotecas Escolares', isHighlighted: true, category: 'consultant', linkedin: 'https://www.linkedin.com/in/jitendra-raut/' },
  { name: 'Sérgio Serra', role: 'Consultor', roleEn: 'Consultant', institution: 'UFRRJ — Brasil', isHighlighted: true, category: 'consultant', linkedin: 'https://www.linkedin.com/in/sergio-serra-7a16086' },
  { name: 'Ulisses Mota', role: 'Consultor', roleEn: 'Consultant', institution: 'Escola Secundária Henrique Medina', isHighlighted: true, category: 'consultant', linkedin: 'https://linkedin.com/in/uli66' },
];

// LinkedIn SVG Icon (inline to keep it simple)
function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

interface TeamCardProps {
  member: TeamMember;
}

function TeamCard({ member }: TeamCardProps) {
  const { t } = useLanguage();

  const cardContent = (
    <div className="p-6 flex flex-col h-full">
      <div className="flex flex-col gap-2 mb-4">
        <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full w-fit shadow-sm ${member.isHighlighted
          ? 'bg-relia-dark text-white'
          : 'bg-relia-light text-white'
          }`}>
          {t(member.role, member.roleEn)}
        </span>
        <h4 className="text-xl font-extrabold text-relia-dark leading-tight group-hover:text-relia-light transition-colors">
          {member.name}
        </h4>
      </div>
      <div className="flex items-start gap-2 text-relia-graytext mt-auto">
        <BuildingIcon className="w-4 h-4 mt-0.5 flex-shrink-0 text-relia-graytext/60" />
        <span className="text-sm font-medium leading-snug">{member.institution}</span>
      </div>
      {member.linkedin && (
        <div className="mt-3 pt-3 border-t border-slate-100 flex items-center gap-2">
          <LinkedInIcon className="w-4 h-4 text-[#0A66C2]" />
          <span className="text-xs font-semibold text-[#0A66C2] group-hover:underline">LinkedIn</span>
        </div>
      )}
    </div>
  );

  if (member.linkedin) {
    return (
      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className={`bg-white rounded-2xl border shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full group cursor-pointer ${member.isHighlighted
          ? 'border-relia-light ring-2 ring-relia-light/20'
          : 'border-relia-graybg'
          }`}
      >
        {cardContent}
      </a>
    );
  }

  return (
    <div className={`bg-white rounded-2xl border shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full group ${member.isHighlighted
      ? 'border-relia-light ring-2 ring-relia-light/20'
      : 'border-relia-graybg'
      }`}>
      {cardContent}
    </div>
  );
}

interface TeamCategoryProps {
  title: string;
  titleEn: string;
  icon: React.ReactNode;
  members: TeamMember[];
}

function TeamCategory({ title, titleEn, icon, members }: TeamCategoryProps) {
  const { t } = useLanguage();

  return (
    <div className="mb-16">
      <div className="flex items-center gap-4 mb-8">
        <div className="text-relia-dark">{icon}</div>
        <h3 className="text-xs font-black uppercase tracking-[0.3em] text-relia-dark">
          {t(title, titleEn)}
        </h3>
        <div className="h-1.5 w-24 bg-gradient-to-r from-relia-dark to-relia-light rounded-full"></div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member, index) => (
          <TeamCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
}

export function TeamSection() {
  const { t } = useLanguage();

  const researchTeam = teamMembers.filter(m => m.category === 'research');
  const fellows = teamMembers.filter(m => m.category === 'fellow');
  const ccgTeam = teamMembers.filter(m => m.category === 'ccg');
  const consultants = teamMembers.filter(m => m.category === 'consultant');

  return (
    <section id="equipa" className="bg-white">
      <div className="h-20 scroll-mt-24" />

      {/* Header */}
      <header className="pt-20 pb-12 bg-gradient-to-b from-relia-graybg to-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-black text-relia-dark mb-4 tracking-tight">
              {t('Equipa do Projeto', 'Project Team')}
            </h2>
            <p className="text-relia-graytext text-lg font-medium">
              {t('Corpo de investigadores e parceiros institucionais.', 'Researchers and institutional partners.')}
            </p>
          </div>
        </div>
      </header>

      {/* Team Content */}
      <main className="container mx-auto px-6 max-w-7xl pb-24">
        <TeamCategory
          title="Equipa de Investigação"
          titleEn="Research Team"
          icon={<SearchIcon className="w-5 h-5" />}
          members={researchTeam}
        />

        <TeamCategory
          title="Bolseiros de Investigação"
          titleEn="Research Fellows"
          icon={<UsersIcon className="w-5 h-5" />}
          members={fellows}
        />

        <div className="border-t border-relia-graybg pt-12">
          <TeamCategory
            title="Equipa CCG (Desenvolvimento)"
            titleEn="CCG Team (Development)"
            icon={<CodeIcon className="w-5 h-5" />}
            members={ccgTeam}
          />
        </div>

        <div className="border-t border-relia-graybg pt-12">
          <TeamCategory
            title="Consultores"
            titleEn="Consultants"
            icon={<BriefcaseIcon className="w-5 h-5" />}
            members={consultants}
          />
        </div>
      </main>
    </section>
  );
}
