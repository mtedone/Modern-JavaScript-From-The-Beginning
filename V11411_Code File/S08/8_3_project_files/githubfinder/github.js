class Github {
  constructor() {
    // Not for production
    this.client_id = '83fe06604b35ae6a251a';
    this.client_secret = '956a41137ff03f53a1c351769ab3d5adc0b17b6a';
  }

  async getUser(user) {
    const fetchUrl = `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`

    const profileResponse =
        await fetch(`${fetchUrl}`);

    const profile = await profileResponse.json();

    return {
      profile: profile
    }
  }
}