import { useEffect, useRef } from 'react';
import * as monaco from 'monaco-editor';
import './PlaygroundRight.css';

function PlaygroundRight() {
    const editorRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            editorRef.current = monaco.editor.create(containerRef.current, {
                value: `// Example C code
#include <stdio.h>

#define PI 3.14159265358979323846

double add(double a, double b) {
    return a + b;
}

int main() {
    printf("Hello, World!\\n");

    double radius = 5.0;
    double area = PI * radius * radius;
    printf("The area of a circle with radius %.1lf is %.10lf\\n", radius, area);

    printf("The sum of 2 and 3 is %f\\n", add(2, 3));
    return 0;
}`,
                language: 'c',
                theme: 'vs',
                automaticLayout: true,
                minimap: {
                    enabled: false
                },
                fontSize: 14
            });

            return () => {
                editorRef.current?.dispose();
            };
        }
    }, []);

    return (
        <div className="PlaygroundRight">
            <div ref={containerRef} style={{ width: '100%', height: '100%' }}></div>
        </div>
    );
}

export default PlaygroundRight;