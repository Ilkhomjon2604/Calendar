$(document).ready(function() {
  $('#calendar').evoCalendar({

    theme:"Midnight Blue",
    calendarEvents: [
      {
        id: 'event1', // Event's ID (required)
        name: "New Year", // Event name (required)
        date: "January/1/2022", // Event date (required)
        description:'May this year bring new happiness, new goals, new achievements, and a lot of new inspirations on your life',
        type: "holiday", // Event type (required)
        everyYear: true // Same event every year (optional)
      },
      {

        name: "Valentine's Day",
        date: ["February/14/2022"], // Date range
        description: "Happy Valentine's Day", // Event description (optional)
        type: "event",
        color: "#63d867" // Event custom color (optional)
      },
      {

        name: "Women's Day",
        date: ["March/08/2022"], // Date range
        description: "Wishing a very happy Woman's Day to strong, intelligent, talented and simply wonderful women of this world! Don't you ever forget that you are loved and appreciated.", // Event description (optional)
        type: "event",
        everyYear: true ,// Same event every year (optional)
        // color: "#63d867" // Event custom color (optional)
      },

      {

        name: "Labor's Day",
        date: ["May/01/2022"], // Date range
        description: "To all hardworking employees: Happy Labor Day! And a special shout out to those who work hard to protect workers' rights. Thank you all for making our world a better place to live and work in. Happy Labor Day weekend to our employees, customers, and partners", // Event description (optional)
        type: "event",
        everyYear: true ,// Same event every year (optional)
        // color: "#63d867" // Event custom color (optional)
      },
      {

        name: "Halloween",
        date: ["Octaber/31/2022"], // Date range
        description: "Have a spook-tacular, boo-tiful, wooo-nderful, and fang-tastic Halloween! Have a killer Halloween! Wishing you lots of fun and lots of yummy treats! May your Halloween be filled with scary times and scary memories.", // Event description (optional)
        type: "event",
        everyYear: true ,// Same event every year (optional)
        // color: "#63d867" // Event custom color (optional)
      },


      {

        name: "Merry Christmas",
        date: ["December/25/2022"], // Date range
        description: "Please note: Christmas is canceled. Apparently you told Santa you’ve been good this year and he died of laughter.", // Event description (optional)
        type: "event",
        everyYear: true ,// Same event every year (optional)
        // color: "#63d867" // Event custom color (optional)
      },

      {
        id: 'event1', // Event's ID (required)
        name: "New Year Eve", // Event name (required)
        date: "December/31/2022", // Event date (required)
        description:'May the new year bless you with health, wealth, and happiness.',
        type: "holiday", // Event type (required)
        everyYear: true // Same event every year (optional)
      },
    ]

  })
})