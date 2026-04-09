// 1. Attendee object
const attendee = {
  attendeeId: "T001",
  name: "Alice Smith",
  event: "JavaScript Conference",
  ticketType: "VIP",
  ticketPrice: 150.00
};

// 2. Log attendee name
function logAttendeeName(attendee) {
  console.log(attendee.name);
}

// 3. Log ticket price
function logTicketPrice(attendee) {
  console.log(attendee.ticketPrice);
}

// 4. Update ticket type
function updateTicketType(attendee, newTicketType) {
  attendee.ticketType = newTicketType;
}

// 5. Update ticket price
function updateTicketPrice(attendee, newTicketPrice) {
  attendee.ticketPrice = newTicketPrice;
}

// 6. Remove event property
function removeEventProperty(attendee) {
  delete attendee.event;
}

// 7. Add checkedIn property
function addCheckedInProperty(attendee) {
  attendee.checkedIn = true;
}