import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

export default function TimeLineList({list=[]}) {
  return (
    <Timeline >
        {list.map((item,index) =>
        <TimelineItem key={index}>
            <TimelineSeparator>
            <TimelineDot color="primary"/>
            {index<list.length-1 && <TimelineConnector />} 
            </TimelineSeparator>
            <TimelineContent style={{fontSize:20}}>{item}</TimelineContent>
        </TimelineItem>            
        )}
    </Timeline>
  );
}