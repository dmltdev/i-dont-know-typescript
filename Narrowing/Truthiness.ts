namespace TruthinessNarrowing {
  function getUsersOnlineMessage(numUsersOnline: number) {
    if (numUsersOnline) {
      return `There are ${numUsersOnline} online now!`;
    }

    return "Nobody's here. :(";
  }

  getUsersOnlineMessage(5); //?
  getUsersOnlineMessage(0); //?
}
