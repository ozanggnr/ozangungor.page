export interface Certification {
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  verifyUrl: string;
  skills?: string[];
  badgeColor?: string;
}

export const certifications: Certification[] = [
  {
    title: 'Claude Academy: AI Capabilities and Limitations',
    issuer: 'Anthropic',
    issueDate: 'Sep 2026',
    credentialId: 'c1e2361146a7b39e8193042fa651763d',
    verifyUrl: 'https://academy.claude.com/verify/c1e2361146a7b39e8193042fa651763d',
    skills: ['Anthropic Claude', 'LLM Capabilities', 'AI Safety'],
    badgeColor: 'from-amber-400/20 to-orange-500/20 text-amber-300 border-amber-400/30',
  },
  {
    title: 'Postman API Fundamentals Student Expert',
    issuer: 'Postman',
    issueDate: 'Feb 2026',
    credentialId: '697fdd84f3076cdd064ed102',
    verifyUrl: 'https://api.badgr.io/public/assertions/rKOj3GKhR2Cen9i4uAFicw',
    skills: ['Postman API', 'REST APIs', 'API Testing'],
    badgeColor: 'from-orange-500/20 to-red-500/20 text-orange-300 border-orange-400/30',
  },
  {
    title: 'Certificate of Completion: AI Fluency Framework & Foundations',
    issuer: 'Anthropic',
    issueDate: 'Jan 2026',
    credentialId: 'kb2ksmk5e75s',
    verifyUrl: 'https://verify.skilljar.com/c/kb2ksmk5e75s',
    skills: ['AI Fluency', 'Foundations', 'Prompt Engineering'],
    badgeColor: 'from-amber-400/20 to-orange-500/20 text-amber-300 border-amber-400/30',
  },
  {
    title: 'Fundamentals of Machine Learning',
    issuer: 'Garanti BBVA Teknoloji',
    issueDate: 'Dec 2025',
    credentialId: 'b970d837-9552-43cf-aff0-e14e6e2be736',
    verifyUrl: 'https://coderspace.io/sertifikalar/b970d837-9552-43cf-aff0-e14e6e2be736',
    skills: ['Machine Learning', 'Data Modeling', 'Algorithms'],
    badgeColor: 'from-emerald-500/20 to-teal-500/20 text-emerald-300 border-emerald-400/30',
  },
  {
    title: 'Blockchain 101 Bootcamp',
    issuer: 'Coderspace',
    issueDate: 'Dec 2025',
    credentialId: 'e6c2227a-f5ae-476b-9362-818d6f04317f',
    verifyUrl: 'https://coderspace.io/sertifikalar/e6c2227a-f5ae-476b-9362-818d6f04317f',
    skills: ['Blockchain', 'Smart Contracts', 'Web3 Architecture'],
    badgeColor: 'from-blue-500/20 to-cyan-500/20 text-sky-300 border-sky-400/30',
  },
  {
    title: 'Cyber Security 101',
    issuer: 'Akbank Teknoloji',
    issueDate: 'Nov 2025',
    credentialId: '24223931884731',
    verifyUrl: 'https://akbank-genclik-akademisi.verified.cv/tr/verify/24223931884731',
    skills: ['Cybersecurity', 'Network Security', 'Threat Mitigation'],
    badgeColor: 'from-rose-500/20 to-red-500/20 text-rose-300 border-rose-400/30',
  },
  {
    title: 'Career Essentials in GitHub Professional Certificate',
    issuer: 'GitHub',
    issueDate: 'Nov 2024',
    verifyUrl: 'https://www.linkedin.com/learning/certificates/f8b70a385d633b61c2a669a8a51c37c5fea24fb879f226be885d2dbae43143ca/',
    skills: ['Git', 'GitHub Workflows', 'CI/CD & Collaboration'],
    badgeColor: 'from-purple-500/20 to-violet-500/20 text-violet-300 border-violet-400/30',
  },
];
