//
// For guidance on how to create filters see:
// https://prototype-kit.service.gov.uk/docs/filters
//

const govukPrototypeKit = require('govuk-prototype-kit')
const addFilter = govukPrototypeKit.views.addFilter

//
// DEBUG DATA
//
addFilter('debugData', function(content) {

    // content: the session data object

    return (this.ctx.data.debug === 'true') ? '<div class="govuk-grid-row"><div class="govuk-grid-column-two-thirds"><h2 class="govuk-heading-m govuk-!-margin-top-9">Session data</h2><textarea class="govuk-textarea">' + JSON.stringify(content) + '</textarea><p><a class="govuk-link" href="?debug=false">Remove</a></p></div></div>' : '';

});

