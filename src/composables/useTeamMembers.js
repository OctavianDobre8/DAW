import { ref } from 'vue';

export function useTeamMembers() {
  const teamMembers = ref([
    'John Doe - CEO',
    'Jane Smith - CTO',
    'Mike Johnson - Lead Developer'
  ]);
  const newMember = ref('');

  const addMember = () => {
    if (newMember.value.trim()) {
      teamMembers.value.push(newMember.value);
      newMember.value = '';
    }
  };

  const removeMember = (index) => {
    teamMembers.value.splice(index, 1);
  };

  return {
    teamMembers,
    newMember,
    addMember,
    removeMember
  };
}