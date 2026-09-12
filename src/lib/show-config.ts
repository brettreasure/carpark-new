// Single source of truth for the /show page's season details.
// Flip SEASON_CONFIRMED to true once the season is locked in, fill in the
// dates below, and the hero line, nav link, sitemap entry and JSON-LD event
// schema all update together — no other code changes required.
export const SEASON_CONFIRMED = false;

export const SHOW_SEASON_LABEL = 'FRINGE WORLD 2027';
export const SHOW_VENUE_NAME = 'The Backlot';
export const SHOW_VENUE_SUBURB = 'West Perth';

// ISO 8601 dates (e.g. '2027-01-29'). Only used once SEASON_CONFIRMED is true.
export const SHOW_START_DATE = '';
export const SHOW_END_DATE = '';
export const SHOW_TICKET_URL = '';

export const SHOW_HERO_META = SEASON_CONFIRMED
  ? `${SHOW_SEASON_LABEL} · ${SHOW_VENUE_NAME}, ${SHOW_VENUE_SUBURB}`
  : 'Perth · 2027';
