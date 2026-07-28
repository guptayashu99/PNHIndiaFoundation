/**
 * Citations for the clinical and policy claims on this site.
 *
 * Rule of thumb for this repo: if a statement on a patient-facing page carries a
 * number, a drug name, or a policy claim, it should be traceable to something in
 * here. Patients and clinicians both check, and a rare disease site that cites
 * its sources is treated very differently from one that doesn't.
 *
 * `checked` is the date the link was last verified. Policy facts in particular
 * go stale — the NPRD disease list is revised periodically.
 */

export interface Source {
  id: string;
  title: string;
  publisher: string;
  url: string;
  checked: string;
  note?: string;
}

export const sources: Source[] = [
  {
    id: 'merck',
    title: 'Paroxysmal Nocturnal Hemoglobinuria (PNH)',
    publisher: 'Merck Manual, Professional Edition',
    url: 'https://www.merckmanuals.com/professional/hematology-and-oncology/anemias-caused-by-hemolysis/paroxysmal-nocturnal-hemoglobinuria-pnh',
    checked: '2026-07-28',
    note: 'Median age of onset, proportion with overt haemoglobinuria, clone-size thresholds, aplastic anaemia association, meningococcal vaccination timing.',
  },
  {
    id: 'nord',
    title: 'Paroxysmal Nocturnal Hemoglobinuria',
    publisher: 'National Organization for Rare Disorders (NORD)',
    url: 'https://rarediseases.org/rare-diseases/paroxysmal-nocturnal-hemoglobinuria/',
    checked: '2026-07-28',
  },
  {
    id: 'iccs',
    title:
      'ICCS/ESCCA Consensus Guidelines to detect GPI-deficient cells in PNH and related disorders',
    publisher: 'Cytometry Part B: Clinical Cytometry',
    url: 'https://onlinelibrary.wiley.com/doi/full/10.1002/cyto.b.21610',
    checked: '2026-07-28',
    note: 'The international standard for high-sensitivity flow cytometry testing and clone-size reporting.',
  },
  {
    id: 'cdsco-eculizumab',
    title:
      'Eculizumab becomes first anti-complement medicine CDSCO-approved in India for PNH and aHUS',
    publisher: 'AstraZeneca India',
    url: 'https://www.astrazeneca.in/media/press-releases/2025/astrazeneca-eculizumab-becomes-first-anti-complement-medicine-to-be-cdsco-approved-in-india-to-manage-two-rare-diseases-paroxysmal-nocturnal-hemoglobinuria-and-atypical-hemolytic-uremic-syndrome.html',
    checked: '2026-07-28',
    note: 'CDSCO import and distribution approval, January 2025.',
  },
  {
    id: 'nprd',
    title: 'National Policy for Rare Diseases, 2021',
    publisher: 'Ministry of Health and Family Welfare, Government of India',
    url: 'https://rarediseases.mohfw.gov.in/uploads/Content/1624967837_Final-NPRD-2021.pdf',
    checked: '2026-07-28',
  },
  {
    id: 'nprd-list',
    title: 'List of Rare Diseases as per National Policy for Rare Diseases, 2021',
    publisher: 'Organization for Rare Diseases India (ORDI)',
    url: 'https://ordindia.in/about-rd/rare-diseases-covered-under-nprd/',
    checked: '2026-07-28',
    note: 'The 63 diseases across Groups 1–3. PNH does not appear on this list.',
  },
  {
    id: 'coe',
    title: 'Centres of Excellence for Rare Diseases',
    publisher: 'Ministry of Health and Family Welfare, Government of India',
    url: 'https://rarediseases.mohfw.gov.in/',
    checked: '2026-07-28',
  },
  {
    id: 'india-cohort',
    title:
      'Clinical Characteristics and Outcomes of Patients with PNH: A Retrospective Study from a Tertiary Care Centre in South India',
    publisher: 'Blood (American Society of Hematology)',
    url: 'https://ashpublications.org/blood/article/144/Supplement%201/3708/533830/Clinical-Characteristics-and-Outcomes-of-Patients',
    checked: '2026-07-28',
    note: 'Indian cohort managed without access to C5 inhibitors.',
  },
  {
    id: 'india-flaer',
    title:
      'Clinico-Haematological Profile of PNH in Indian Patients: FLAER Flow Cytometry Based Experience from an Indian Tertiary Care Centre',
    publisher: 'Indian Journal of Hematology and Blood Transfusion (PubMed)',
    url: 'https://pubmed.ncbi.nlm.nih.gov/33867727/',
    checked: '2026-07-28',
  },
  {
    id: 'slr-2026',
    title:
      'Efficacy and Safety of Treatments for Paroxysmal Nocturnal Hemoglobinuria: A Systematic Literature Review',
    publisher: 'Journal of Clinical Medicine',
    url: 'https://doi.org/10.3390/jcm15114217',
    checked: '2026-07-28',
    note: 'Current treatment landscape including proximal complement inhibitors.',
  },
  {
    id: 'pnhga',
    title: 'PNH Global Alliance',
    publisher: 'PNH Global Alliance',
    url: 'https://pnhglobalalliance.org/',
    checked: '2026-07-28',
  },
  {
    id: 'aamds',
    title: 'PNH information, peer support and the Global PNH Patient Registry',
    publisher: 'Aplastic Anemia and MDS International Foundation (AAMDSIF)',
    url: 'https://www.aamds.org/',
    checked: '2026-07-28',
  },
];

export const byId = (id: string): Source => {
  const found = sources.find((s) => s.id === id);
  if (!found) throw new Error(`Unknown source id: ${id}`);
  return found;
};
