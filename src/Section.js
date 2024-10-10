import React, { useState, useEffect } from "react";
import axios from "axios";
import MovableCard from "./components/InforCard/InfoCard";
import "./Section.css";

function Section({ grouping, ordering }) {
  const [ticketsData, setTicketsData] = useState([]);
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => {
        const { tickets, users } = response.data;
        setTicketsData(tickets);
        setUsersData(users);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);


  const priorityLabels = {
    0: "No priority",
    4: "Urgent",
    3: "High",
    2: "Medium",
    1: "Low"
  };

  // Sorting priorities in the order 0 -> 4 -> 3 -> 2 -> 1
  const priorityOrder = [0, 4, 3, 2, 1];

  // Map userId to userName
  const userMap = usersData.reduce((map, user) => {
    map[user.id] = user.name;
    return map;
  }, {});

  // Group tickets based on the selected grouping options
  const groupedTickets = ticketsData.reduce((groups, ticket) => {
    const groupKey = grouping === "User"
      ? ticket.userId
      : grouping === "Priority"
        ? ticket.priority
        : ticket.status;

    if (!groups[groupKey]) {
      groups[groupKey] = [];
    }
    groups[groupKey].push(ticket);
    return groups;
  }, {});

  // Sort the tickets within each group based on the selected ordering option (can be by Priority or by Title)
  Object.keys(groupedTickets).forEach((key) => {
    groupedTickets[key].sort((a, b) => {
      if (ordering === "Priority") {
        return b.priority - a.priority;
      } else if (ordering === "Title") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });
  });

  return (
    <div className="scroll-container">
      <div className="card-columns">
        {/* If grouping is by Priority -> according to the fixed priority order */}
        {grouping === "Priority" &&
          priorityOrder.map((priority) => (
            <div className="column" key={priority}>
              <div className="titleAllign">
                <h2>{priorityLabels[priority]}  </h2>
                
                
              </div>
              {groupedTickets[priority] && groupedTickets[priority].length > 0 ? (
                groupedTickets[priority].map((ticket) => (
                  <MovableCard
                    key={ticket.id}
                    cardId={ticket.id}
                    title={ticket.title}
                    label={ticket.tag.join(", ")}
                    type={ticket.status}
                    priority={ticket.priority}
                  />
                ))
              ) : (
                <p>No tickets</p>
              )}
            </div>
          ))}

        {/* If grouping is by User -> user names (not user ID) */}
        {grouping === "User" &&
          Object.keys(groupedTickets).map((userId) => (
            <div className="column" key={userId}>
              <div className="titleAllign">
                <h2>{userMap[userId] || "Hritik Roshan"} </h2>
              </div>
              {groupedTickets[userId].map((ticket) => (
                <MovableCard
                  key={ticket.id}
                  cardId={ticket.id}
                  title={ticket.title}
                  label={ticket.tag.join(", ")}
                  type={ticket.status}
                  priority={ticket.priority}
                />
              ))}
            </div>
          ))}

        {/* If grouping is by Status, display normally */} {/* for the "Status option in the dropdown group by" */}
        {grouping !== "Priority" && grouping !== "User" &&
          Object.keys(groupedTickets).map((group) => (
            <div className="column" key={group}>
              <div className="titleAllign" key={group}>
                <h2>{group} </h2>
              </div>
              {groupedTickets[group].map((ticket) => (
                <MovableCard
                  key={ticket.id}
                  cardId={ticket.id}
                  title={ticket.title}
                  label={ticket.tag.join(", ")}
                  type={ticket.status}
                  priority={ticket.priority}
                />
              ))}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Section;
