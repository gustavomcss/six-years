// Import Style Component
import './Clock.css';

// Import React Libs
import { useState, useEffect } from 'react';

const Clock = () => {
    const [timeDiff, setTimeDiff] = useState({
        years: 0,
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const calculateTimeDiff = () => {
            const startDate = new Date(2019, 3, 29, 0, 0, 0); // 29/04/2019
            const now = new Date();

            let years = now.getFullYear() - startDate.getFullYear();
            let months = now.getMonth() - startDate.getMonth();
            let days = now.getDate() - startDate.getDate();

            // Ajustar meses e anos se necessário
            if (days < 0) {
                months -= 1;
                const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
                days += previousMonth.getDate();
            }

            if (months < 0) {
                years -= 1;
                months += 12;
            }

            // Calcular horas, minutos e segundos
            const diffInMs = now - startDate;
            const diffInSeconds = Math.floor(diffInMs / 1000);
            const seconds = diffInSeconds % 60;
            const totalMinutes = Math.floor(diffInSeconds / 60);
            const minutes = totalMinutes % 60;
            const hours = Math.floor(totalMinutes / 60) % 24;

            setTimeDiff({
                years: years.toString().padStart(2, "0"),
                months: months.toString().padStart(2, "0"),
                days: days.toString().padStart(2, "0"),
                hours: hours.toString().padStart(2, "0"),
                minutes: minutes.toString().padStart(2, "0"),
                seconds: seconds.toString().padStart(2, "0")
            });
        };

        calculateTimeDiff();

        const interval = setInterval(calculateTimeDiff, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="Clock">
                <p>Desde 29 de Abril de 2019:</p>
        
                <table>
                    <thead>
                        <tr>
                            <th scope="col">{timeDiff.years}</th>
                            <th scope="col">{timeDiff.months}</th>
                            <th scope="col">{timeDiff.days}</th>
                            <th scope="col">{timeDiff.hours}</th>
                            <th scope="col">{timeDiff.minutes}</th>
                            <th scope="col">{timeDiff.seconds}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="col">Anos</th>
                            <th scope="col">Meses</th>
                            <th scope="col">Dias</th>
                            <th scope="col">Horas</th>
                            <th scope="col">Minutos</th>
                            <th scope="col">Segundos</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Clock;