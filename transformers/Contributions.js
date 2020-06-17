import BaseTransformer from './Base'

class ContributionsTransformer extends BaseTransformer {
  static fetch(contribution) {
    return {
      userName: contribution.user.name,
      avatar: contribution.user.avatarUrl,
      id: contribution.user.id,
      followers: contribution.user.followers.totalCount,
      colors:
        contribution.user.contributionsCollection.contributionCalendar.colors,
      totalContributions:
        contribution.user.contributionsCollection.contributionCalendar
          .totalContributions
    }
  }
}

export default ContributionsTransformer
