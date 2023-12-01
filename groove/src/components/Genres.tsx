import React from "react"

interface IGenres {
    index: number;
    name: string;
    length: number | undefined;
}

const Genres: React.FC<IGenres> = ({ index, name, length }) => {
    return (
        <div className="flex gap-4 cursor-pointer">
            <div className="">{name}</div>
            <div className="">{index + 1 !== length ? "/" : ""}</div>
        </div>
    )
}

export default Genres