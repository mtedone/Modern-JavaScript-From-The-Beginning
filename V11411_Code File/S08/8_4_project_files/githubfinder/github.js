class Github {
  constructor() {
    // Not for production
    this.client_id = '83fe06604b35ae6a251a';
    this.client_secret = '956a41137ff03f53a1c351769ab3d5adc0b17b6a';
    this.authenticationHeader = btoa(`${this.client_id}:${this.client_secret}`);
  }

  async getUser(user) {
    const fetchUrl = `https://api.github.com/users/${user}`;
    const profileResponse =
        await fetch(`${fetchUrl}`, {
          method: 'GET',
          headers: {
            'Authorization': `Basic ${this.authenticationHeader}`
          }
        });

    const profile = await profileResponse.json();

    return {
      profile: profile
    }
  }
}