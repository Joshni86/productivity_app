"use client";

import { useState, useRef, useEffect, ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Timer() {
  const [time, setTime] = useState(""); // time as a string initially
  const [timeLeft, setTimeLeft] = useState(false); // boolean state
  const [isRunning, setIsRunning] = useState(0); // 0 for not running
  const [isPaused, setIsPaused] = useState(false); // boolean state
  const timeRef = useRef(null); // timeRef is a ref with an initial value of null

  const handleSetDuration = () => {
    if (duration === "number" && duration > 0) {
      setTimeLeft(duration);
      setIsRunning(false);
      setIsPaused(false);
      if (timeRef.current) {
        clearInterval(timeRef.current);
      }
    }
  };

  const handleStart = () => {
    if (timeLeft > 0) {
      setIsRunning(true);
      setIsPaused(false);
      timeRef.current = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    }
  };

  const handlePause = () => {
    setIsRunning(false);
    setIsPaused(true);
    if (timeRef.current) {
      clearInterval(timeRef.current);
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    setIsPaused(false);
    setTimeLeft(duration === "number" ? duration : 0);
    if (timeRef.current) {
      clearInterval(timeRef.current);
    }
  };

  useEffect(() => {
    if (isRunning && !isPaused) {
      timeRef.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timeRef.current);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    return () => {
      if (timeRef.current) {
        clearInterval(timeRef.current);
      }
    };
  }, [isRunning, isPaused]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleDurationChange = (e) => {
    setTime(e.target.value);
  };
  return (
    <div className="flex flex-col items-center h-screen bg-red-100">
      <h1 className="text-3xl font-bold">Timer -- use Pomodoro</h1>
      <Input
        type="number"
        value={time}
        onChange={handleDurationChange}
        placeholder="Enter time in seconds"
      />
      <Button onClick={handleSetDuration}>Set Duration</Button>
      <div>
        <h1>{formatTime(timeLeft)}</h1>
        <Button onClick={handleStart}>Start</Button>
        <Button onClick={handlePause}>Pause</Button>
        <Button onClick={handleReset}>Reset</Button>
      </div>
    </div>
  );
}
