import React from "react";
import FriendsListItem from "./FriendsListItem";

const SAMPLE_FRIENDS = [
    {
        id: 1,
        name: "Nickname1",
    },
    {
        id: 2,
        name: "Nickname2",
    },
    {
        id: 3,
        name: "Nickname3",
    },
];

export default function FriendsList() {
    return (
        <div className="friends-list">
            {SAMPLE_FRIENDS.map((friend) => {
                return <FriendsListItem key={friend.id} friend={friend} />;
            })}
        </div>
    );
}
