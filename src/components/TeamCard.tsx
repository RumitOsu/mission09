import React from 'react';

// Define the props expected by the TeamCard component
interface TeamCardProps {
  school: string;
  mascot: string;
  location: string;
}

// TeamCard component displays information about a single NCAA basketball team
const TeamCard: React.FC<TeamCardProps> = ({ school, mascot, location }) => {
  return (
    <div className="team-card">
      <h2>{school}</h2>
      <p>Mascot: {mascot}</p>
      <p>Location: {location}</p>
    </div>
  );
};

// Export the component for use in other parts of the app
export default TeamCard;
