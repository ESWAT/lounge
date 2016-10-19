"use strict";

const Handlebars = global.Handlebars = require("handlebars");
const expect = require("chai").expect;

require("../../../../../client/js/libs/handlebars/localetime");

describe("localetime Handlebars helper", () => {

	it("should render a human-readable date", () => {
		const template = Handlebars.compile("{{localetime time}}");

		// 12PM in New York
		const time = new Date("2014-05-22T12:00:00-04:00").getTime();

		// Force the timezone to use to display string
		process.env.TZ = "America/New_York";

		expect(template({time: time})).to.equal("5/22/2014, 12:00:00 PM");
	});

});
