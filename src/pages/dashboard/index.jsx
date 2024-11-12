import { useEffect, useState } from "react";
import AddTeam from "./AddTeam";
import Card from "./Card";
import { teamsData } from "../../data/teams";

const Dashboard = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTeams = () => {
    setTimeout(() => {
      const hasError = Math.random() > 0.8;
      if (hasError) {
        setError("Failed to fetch teams😓. Try refreshing...");
        setLoading(false);
      } else {
        setTeams(teamsData);
        setLoading(false);
      }
    }, 1000);
  };

  useEffect(() => {
    setError(null);
    setLoading(true);
    fetchTeams();
  }, []);

  return (
    <>
      {loading && <p className="text-center w-full my-10">Fetching Teams...</p>}
      {error && <p className="text-[red] text-center w-full my-10">{error}</p>}
      {!loading && !error && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 py-10 px-8">
          {teams.map((team) => (
            <Card key={team.id} team={team} />
          ))}
          <AddTeam />
        </div>
      )}
    </>
  );
};

export default Dashboard;
