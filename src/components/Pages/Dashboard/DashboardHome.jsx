import { useTrail, useChain, useSprings, animated, useSpringRef } from '@react-spring/web'
import styles from './styles.module.css'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Provider/AuthProvider'
const COORDS = [
    [50, 30],
    [90, 30],
    [50, 50],
    [60, 60],
    [70, 60],
    [80, 60],
    [90, 50],
  ]
  
  const STROKE_WIDTH = 0.5
  
  const OFFSET = STROKE_WIDTH / 2
  
  const MAX_WIDTH = 150 + OFFSET * 2
  const MAX_HEIGHT = 100 + OFFSET * 2

const DashboardHome = () => {
    const { user } = useContext(AuthContext)
    const [users, setUsers] = useState()
    useEffect(() => {
        fetch(`http://localhost:5000/dashboard/${user?.email}`)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    console.log('dsHome', users);
    const gridApi = useSpringRef()

  const gridSprings = useTrail(16, {
    ref: gridApi,
    from: {
      x2: 0,
      y2: 0,
    },
    to: {
      x2: MAX_WIDTH,
      y2: MAX_HEIGHT,
    },
  })

  const boxApi = useSpringRef()

  const [boxSprings] = useSprings(7, i => ({
    ref: boxApi,
    from: {
      scale: 0,
    },
    to: {
      scale: 1,
    },
    delay: i * 200,
    config: {
      mass: 2,
      tension: 220,
    },
  }))

  useChain([gridApi, boxApi], [0, 1], 1500)
  return (
    <div className={'w-[70vw]'}>
        <h1 className=' text-2xl font-bold '>Welcome {users?.role},</h1>
        <h1>This is your dashboard page. Explore left panel for all functionality.</h1>
      <div className={'text-rose-100 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 '}>
        <svg viewBox={`0 0 ${MAX_WIDTH} ${MAX_HEIGHT}`}>
          <g>
            {gridSprings.map(({ x2 }, index) => (
              <animated.line
                x1={0}
                y1={index * 10 + OFFSET}
                x2={x2}
                y2={index * 10 + OFFSET}
                key={index}
                strokeWidth={STROKE_WIDTH}
                stroke="currentColor"
              />
            ))}
            {gridSprings.map(({ y2 }, index) => (
              <animated.line
                x1={index * 10 + OFFSET}
                y1={0}
                x2={index * 10 + OFFSET}
                y2={y2}
                key={index}
                strokeWidth={STROKE_WIDTH}
                stroke="currentColor"
              />
            ))}
          </g>
          {boxSprings.map(({ scale }, index) => (
            <animated.rect
              key={index}
              width={10}
              height={10}
              fill="currentColor"
              style={{
                transformOrigin: `${5 + OFFSET * 2}px ${5 + OFFSET * 2}px`,
                transform: `translate(${COORDS[index][0] + OFFSET}px, ${COORDS[index][1] + OFFSET}px)`,
                scale,
              }}
            />
          ))}
        </svg>
      </div>
    </div>
  )
};

export default DashboardHome;