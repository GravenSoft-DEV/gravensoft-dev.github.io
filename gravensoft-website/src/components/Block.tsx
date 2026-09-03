import type { ReactNode } from "react";
import { Panel } from "./Panel";

interface BlockProps {
    children?: ReactNode;
    className?: string;
    borderVisible?: boolean;
}

export default function Block({id, children, className, borderVisible = true}: BlockProps & {id?: string}) {
    return (
        <section id={id} className={`w-full flex flex-col justify-center items-center ${borderVisible ? `border-b border-zinc-800` : ''} ${className}`}>
            <div className={`w-full h-full max-w-5xl py-12 sm:py-16 px-8 xl:px-0`}>
                {children}
            </div>
        </section>
    );
}

interface SectionProps {
    title?: string;
    text?: string;
    reverse?: boolean;
    usePanel?: boolean;
    panels?: typeof Panel[];
}

export function Section(props: SectionProps) {
    const {
        title,
        text,
        reverse,
        usePanel,
        panels
    } = props;
    
    return (
        <Block className="bg-zinc-950">
        <div className={`flex flex-col sm:flex-row gap-8 ${reverse ? 'sm:flex-row-reverse' : ''}`}>
            <div className="flex flex-col gap-8 flex-1">
                <h1 className="text-4xl font-bold">{title}</h1>
                <p>{text}</p>
            </div>
            <div className="flex flex-col gap-4">
            {
                usePanel ?
                panels?.map((element) => (
                    <>
                        {element}
                    </>
                )) :
                null
            }
            </div>
        </div>
        </Block>
    );
}