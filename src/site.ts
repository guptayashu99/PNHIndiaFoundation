/**
 * Single source of truth for organisation details.
 *
 * ⚠️  EDIT THIS FILE FIRST. Every value marked TODO appears on the live site.
 * Changing it here updates the header, footer, contact page and support page
 * everywhere at once.
 */

export const site = {
  name: 'PNH India Foundation',
  shortName: 'PNH India',
  tagline: 'Patient advocacy and support for people living with PNH in India',
  description:
    'PNH India Foundation is a patient advocacy organisation supporting people living with Paroxysmal Nocturnal Haemoglobinuria (PNH) across India — with information, peer support, and help navigating diagnosis, treatment and access.',

  // TODO: replace with the organisation's real contact details before launch.
  email: 'contact@pnhindiafoundation.org',
  phone: '+91 00000 00000',
  // Shown as the response-time promise on the contact page. Keep it honest —
  // an unmet promise is worse than no promise.
  responseTime: 'within 3 working days',

  // TODO: city/state at minimum. A full registered address is required on the
  // site if you later register for 80G and accept receipted donations.
  address: {
    line1: 'TODO: registered address line 1',
    line2: 'TODO: address line 2',
    city: 'TODO: City',
    state: 'TODO: State',
    pincode: 'TODO: PIN',
  },

  // TODO: fill in the handles that actually exist. Delete the rest —
  // the footer only renders links whose url is non-empty.
  social: {
    facebook: '',
    instagram: '',
    x: '',
    linkedin: '',
    youtube: '',
    whatsapp: '',
  },

  // TODO: legal/registration details. Leave blank until confirmed — publishing
  // an unverified registration number creates real problems.
  registration: {
    // e.g. 'Registered as a Trust under the Indian Trusts Act, 1882'
    entityType: '',
    registrationNumber: '',
    // 12A / 80G status. Only claim 80G once the certificate is in hand.
    has80G: false,
    panOrTan: '',
  },
} as const;

export type Site = typeof site;
