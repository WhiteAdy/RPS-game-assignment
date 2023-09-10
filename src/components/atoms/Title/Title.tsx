import type { Title } from './Title.types';

export default function Title({ text }: Title) {
    return <h6 className="Title">{text}</h6>;
}
