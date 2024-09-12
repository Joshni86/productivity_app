"use client";

import { useState, useRef, useEffect } from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

export default function Timer() {
  const [time, setTime] = useState(""); // time in minutes as a string initially
  const [timeLeft, setTimeLeft] = useState(0); // timeLeft in seconds
  const [isRunning, setIsRunning] = useState(false); // boolean to track if the timer is running
  const [isPaused, setIsPaused] = useState(false); // boolean state
  const timeRef = useRef(null); // ref for the interval

  const handleSetDuration = () => {
    const timeNumber = parseInt(time); // convert time string (minutes) to a number
    if (!isNaN(timeNumber) && timeNumber > 0) {
      setTimeLeft(timeNumber * 60); // convert minutes to seconds
      setIsRunning(false);
      setIsPaused(false);
      if (timeRef.current) {
        clearInterval(timeRef.current);
        timeRef.current = null; // Ensure ref is reset after clearing
      }
    }
  };

  const handleStart = () => {
    if (timeLeft > 0 && !isRunning) {
      setIsRunning(true);
      setIsPaused(false);
      timeRef.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timeRef.current);
            setIsRunning(false); // stop running when time runs out
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
  };

  const handlePause = () => {
    if (isRunning) {
      setIsRunning(false);
      setIsPaused(true);
      if (timeRef.current) {
        clearInterval(timeRef.current); // Clear interval immediately when paused
        timeRef.current = null; // Reset interval ref
      }
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    setIsPaused(false);
    setTimeLeft(parseInt(time) * 60 || 0); // reset to original minutes (converted to seconds)
    if (timeRef.current) {
      clearInterval(timeRef.current);
      timeRef.current = null; // Reset interval ref
    }
  };

  useEffect(() => {
    // Cleanup any intervals when component unmounts
    return () => {
      if (timeRef.current) {
        clearInterval(timeRef.current);
      }
    };
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleDurationChange = (e) => {
    setTime(e.target.value); // handle minutes input
  };

  return (
    <div className="flex flex-col items-center h-screen bg-red-100">
      <h1 className="text-3xl font-bold">Timer -- use Pomodoro</h1>
      <div className="flex flex-col items-center mb-6">
        <Input
          type="number"
          value={time}
          onChange={handleDurationChange}
          placeholder="Enter time in minutes"
          className="p-2 my-4"
        />
        <Button
          onClick={handleSetDuration}
          variant="outline"
          className="w-1/4 p-2 my-4 text-gray-800 dark:text-gray-200"
        >
          Set
        </Button>
        <div className="text-6xl font-bold text-gray-800 mb-4">
          {formatTime(timeLeft)}
        </div>
        <div className="flex justify-center gap-4">
          <Button
            onClick={handleStart}
            variant="outline"
            className="w-1/4 p-2 my-4"
          >
            {isPaused ? "Resume" : "Start"}
          </Button>
          <Button
            onClick={handlePause}
            variant="outline"
            className="w-1/4 p-2 my-4"
          >
            Pause
          </Button>
          <Button
            onClick={handleReset}
            variant="outline"
            className="w-1/4 p-2 my-4"
          >
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}
