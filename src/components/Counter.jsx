import { useCountUp } from '../hooks/useCountUp'
export default function Counter({ value, suffix = '', label }) { const [ref, count] = useCountUp(value); return <div ref={ref} className="counter"><strong>{count}{suffix}</strong><span>{label}</span></div> }
