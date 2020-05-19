function MemberFactory() {
  this.createMember = function (name, type) {
    let member;

    if (type === 'Simple') {
      member = new SimpleMembership(name);
    } else if (type === 'Standard') {
      member = new StandardMembership(name);
    } else if (type === 'Super') {
      member = new SuperMembership(name);
    }

    member.type = type;

    member.define = function () {
      console.log(`${this.name} (${this.type}): ${this.cost}`);

    }

    return member;
  }
}

const SimpleMembership = function (name) {
  this.name = name;
  this.cost = '5$';
}
const StandardMembership = function (name) {
  this.name = name;
  this.cost = '15$';
}
const SuperMembership = function (name) {
  this.name = name;
  this.cost = '25$';
}

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('John Doe', 'Simple'));
members.push(factory.createMember('Mary Quinn', 'Standard'));
members.push(factory.createMember('Mark Quentin', 'Super'));

members.forEach(member => {
  member.define();
});