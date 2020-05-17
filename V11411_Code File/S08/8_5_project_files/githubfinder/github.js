class Github {
  constructor() {
    // Not for production
    this.client_id = '83fe06604b35ae6a251a';
    this.client_secret = '956a41137ff03f53a1c351769ab3d5adc0b17b6a';
    this.authenticationHeader = btoa(`${this.client_id}:${this.client_secret}`);
    this.repos_count = 10;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const userFetchUrl = `https://api.github.com/users/${user}`;
    const reposFetchUrl = `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`;
    const profileResponse =
        await fetch(`${userFetchUrl}`, {
          method: 'GET',
          headers: {
            'Authorization': `Basic ${this.authenticationHeader}`
          }
        });

      const repoResponse =
          await fetch(`${reposFetchUrl}`, {
              method: 'GET',
              headers: {
                  'Authorization': `Basic ${this.authenticationHeader}`
              }
          });

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
        profile: profile,
        repos: repos
    }
  }
}