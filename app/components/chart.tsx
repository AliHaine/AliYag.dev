"use client";

import React, {useEffect, useState} from 'react';
import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

type ChartClientProps = { id: number };

export default function Chart({id}: ChartClientProps) {
    const [data, setData] = useState<{ date: string; servers: number }[]>([]);
    let mapValues = new Map();

    useEffect(() => {
        fetch(`https://bstats.org/api/v1/plugins/${id}/charts/servers/data?maxElements=1440`)
            .then((res) => res.json())
            .then((rawData) => {
                rawData.forEach(([timestamp, servers]: [number, number]) => {
                    const currentDate = new Date(timestamp).toLocaleString().slice(0, -14);
                    mapValues.set(currentDate, servers);
                    console.log(currentDate);
                });
                const dataArray = Array.from(mapValues.entries()).map(([date, servers]) => ({ date, servers }));

                setData(dataArray);
            })
            .catch(console.error);
    }, [id]);

    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
                <XAxis dataKey="date" tick={false} label={{ value: "Date (Last 15 days)", position: "insideBottom" }}/>
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="servers" stroke="rgb(var(--color-two)" />
            </LineChart>
        </ResponsiveContainer>
    );
}