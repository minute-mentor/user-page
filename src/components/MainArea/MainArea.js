import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from '../Card/Card';
import Calendar from 'react-calendar';

const MainContainer = styled.div`
  margin-left: 20%;
  padding: 20px;
  position: relative;
  background-image: url('/main.png');
  background-size: cover;
`;

const TimeDisplay = styled.div`
  position: absolute;
  top: 8px;
  right: 20px;
  padding: 10px;
  font-size: 30px;
`;

const GreetingDisplay = styled.div`
  position: absolute;
  top: 8px;
  left: 20px;
  padding: 10px;
  font-size: 30px;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const UserDataLine = styled.div`
  margin-bottom: 20px;
`;

const UserData = styled.div`
  margin-left: 20px;
  font-size: 30px;
  font-weight: 700;
`;

const CalendarContainer = styled.div`
  margin-top: 115px;
`;

const MainArea = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const profilePic = process.env.PUBLIC_URL + '/profile_pic.png';

  const greeting = currentTime.getHours() < 12 ? 'Good Morning' : 'Good Evening';

  return (
    <MainContainer>
      <Card>
        <TimeDisplay>{currentTime.toLocaleTimeString()}</TimeDisplay>
        <GreetingDisplay>{greeting}, Harsh Gupta</GreetingDisplay>
      </Card>
      <Card>
        <ProfileContainer>
          <img src={profilePic} alt="Profile" />
          <UserData>
            <UserDataLine>EmpID: 123</UserDataLine>
            <UserDataLine>Name: Harsh Gupta</UserDataLine>
            <UserDataLine>Department: IT Department</UserDataLine>
          </UserData>
        </ProfileContainer>
      </Card>
      <Card>
        <CalendarContainer>
          <Calendar />
        </CalendarContainer>
      </Card>
    </MainContainer>
  );
};

export default MainArea;