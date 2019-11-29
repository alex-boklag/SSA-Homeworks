function meeting(meetingRooms, requiredChairs) {
  const rentedChairs = [];

  if (!requiredChairs) return 'Game On';
  if (requiredChairs > 8) return 'Your meeting room can take up to 8 chairs!';

  meetingRooms.forEach(room => {
    if (requiredChairs > 0) {
      const occupants = room[0].length;
      const totalChairs = room[1];
      const freeChairs = (totalChairs - occupants > 0) ? totalChairs - occupants : 0;

      if (freeChairs <= requiredChairs) {
        rentedChairs.push(freeChairs);
        requiredChairs -= freeChairs;
      }
      else {
        rentedChairs.push(requiredChairs);
        requiredChairs = 0;
      }
    }
  });

  if (requiredChairs > 0) return 'Not enough!';

  return rentedChairs;
}

console.log(meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 0));
console.log(meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 9));
console.log(meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4));
console.log(meeting([['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]], 5));
console.log(meeting([['X', 1], ['XXXXX', 6]], 2));