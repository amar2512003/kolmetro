// Turns a landmark name into a URL-safe slug for matching photo filenames,
// e.g. "Victoria Memorial" -> "victoria-memorial",
//      "St. Paul's Cathedral" -> "st-paul-s-cathedral".
// Used to look up files under public/landmarks/ — see that folder for
// naming conventions and how to add new photos.
export function slugifyLandmark(name) {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Candidate photo paths for a landmark, tried in order by
// NearbyLandmarks until one loads (or all fail and it falls back to a
// placeholder). Any of these extensions is fine — just match the slug.
export function landmarkImageCandidates(name) {
  const slug = slugifyLandmark(name);
  return ['jpg', 'jpeg', 'png', 'webp'].map((ext) => `/landmarks/${slug}.${ext}`);
}