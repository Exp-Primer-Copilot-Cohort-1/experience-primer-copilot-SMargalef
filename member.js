function skillsMember() {
    var member = document.getElementById("member");
    var memberName = member.options[member.selectedIndex].value;
    var memberSkills = document.getElementById("memberSkills");
    var memberSkillsArray = [];
    var memberSkillsString = "";
    var memberSkillsLength = memberSkills.length;
    for (var i = 0; i < memberSkillsLength; i++) {
        if (memberSkills.options[i].selected) {
            memberSkillsArray.push(memberSkills.options[i].value);
        }
    }
    memberSkillsString = memberSkillsArray.join(", ");
    document.getElementById("memberSkillsResult").innerHTML = memberName + " has the following skills: " + memberSkillsString;
}