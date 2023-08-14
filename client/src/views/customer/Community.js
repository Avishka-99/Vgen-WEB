import React from 'react'
import '../../styles/Community.css'

export default function Community() {

  const groups = [
    { id: 1, name: 'group1', description: 'description1', members: 10 },
    { id: 2, name: 'group2', description: 'description2', members: 20 },
    { id: 3, name: 'group3', description: 'description3', members: 30 },
    { id: 4, name: 'group4', description: 'description4', members: 40 },
    { id: 5, name: 'group5', description: 'description5', members: 50 },
    { id: 6, name: 'group6', description: 'description6', members: 60 },
  ];
  
  return (
    <div>
      <p>Join for life</p>
      <div className="groups-container">
        {groups.map((group) => (
          <div key={group.id} className='group-card'>
            <div className='group-card__image'></div>
            <div className='group-card__content'>
              <h3 className='group-card__title'>{group.name}</h3>
              <p className='group-card__description'>{group.description}</p>
              <p className='group-card__members'>{`Members: ${group.members}`}</p>
              <button className='group-card__button'>Join</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
}
