import React, { useState, useEffect } from 'react';
import TeamCard from './TeamCard';
import data from '../CollegeBasketballTeams.json';

interface Team {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

// TeamList component that renders a list of all team cards using data from the JSON file
const TeamList = () => {
  const [teams, setTeams] = useState<Team[]>([]);
  useEffect(() => {
    setTeams(data.teams); // Set the teams state with data from the JSON file on component mount
  }, []);

  return (
    <div className="team-list">
      {teams.map((team) => (
        <TeamCard
          key={team.tid}
          school={team.school}
          mascot={team.name}
          location={`${team.city}, ${team.state}`}
        />
      ))}
    </div>
  );
};

// Export the component for use in other parts of the app
export default TeamList;
