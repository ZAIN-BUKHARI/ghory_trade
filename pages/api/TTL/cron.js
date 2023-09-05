// pages/api/scheduleCleanup.js
const cron = require('node-cron');
const cleanupDocuments = require('../../scripts/documentCleanup');

// Schedule the cleanup job to run every day at a specific time (e.g., midnight)
cron.schedule('0 0 * * *', cleanupDocuments);
