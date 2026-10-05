'use client';

import { useState } from 'react';
import { experiences } from '@/lib/CardData';


export default function Experience() {
  const [expanded, setExpanded] = useState<number | null>(1);

  return (
    <section
      id="about"
      className="relative py-24 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section heading */}
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
            Career Journey
          </p>

          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Experience<span className="text-blue-500">.</span>
          </h2>

          <p className="mt-5 text-gray-500 max-w-2xl leading-relaxed">
            Building production-grade frontend systems, architecting
            reusable experiences, and solving complex engineering
            challenges across enterprise platforms.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical timeline line */}
          <div className="absolute left-[7px] top-2 bottom-4 w-px bg-gray-300 dark:bg-gray-700" />

          <div className="space-y-12">

            {experiences.map((exp) => {
              const isExpanded = expanded === exp.id;

              return (
                <div
                  key={exp.id}
                  className="relative pl-10 md:pl-14"
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-0 top-20 w-[15px] h-[15px] rounded-full border-[3px] transition-all ${
                      isExpanded
                        ? 'bg-blue-500 border-blue-200 dark:border-blue-900'
                        : 'bg-white dark:bg-black border-gray-400'
                    }`}
                  />

                  {/* Experience card */}
                  <div className="border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden transition-all hover:border-blue-400/60">

                    {/* Header */}
                    <button
                      onClick={() =>
                        setExpanded(isExpanded ? null : exp.id)
                      }
                      className="w-full text-left p-6 md:p-8"
                    >
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-5">

                        <div>
                          <div className="flex items-center flex-wrap gap-3 mb-3">

                            <span className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-500">
                              {exp.type}
                            </span>

                            {exp.id === 1 && (
                              <span className="text-xs px-3 py-1 rounded-full bg-green-500/10 text-green-600">
                                Current Role
                              </span>
                            )}
                          </div>

                          <h3 className="text-xl md:text-2xl font-semibold">
                            {exp.role}
                          </h3>

                          <p className="text-gray-500 mt-1">
                            {exp.company}
                          </p>

                          <p className="text-sm text-gray-400 mt-2">
                            {exp.period} · {exp.location}
                          </p>
                        </div>

                        <div className="flex items-center gap-3">
                          <span className="text-sm text-gray-500">
                            {isExpanded ? 'Collapse' : 'Explore'}
                          </span>

                          <span
                            className={`text-xl transition-transform ${
                              isExpanded ? 'rotate-180' : ''
                            }`}
                          >
                            ↓
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-400 mt-5 leading-relaxed max-w-3xl">
                        {exp.description}
                      </p>
                    </button>

                    {/* Expandable details */}
                    {isExpanded && (
                      <div className="px-6 md:px-8 pb-8 border-t border-gray-200 dark:border-gray-800">

                        {/* Summary */}
                        <div className="pt-7 mb-8">
                          <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
                            Overview
                          </p>

                          <p className="text-gray-700 dark:text-gray-300 leading-7 max-w-3xl">
                            {exp.summary}
                          </p>
                        </div>

                        {/* Key achievements */}
                        <div className="mb-9">
                          <p className="text-xs uppercase tracking-widest text-gray-400 mb-5">
                            Selected Contributions
                          </p>

                          <div className="space-y-6">

                            {exp.highlights.map((item, index) => (
                              <div
                                key={index}
                                className="flex gap-4"
                              >
                                <div className="mt-2 shrink-0 w-2 h-2 rounded-full bg-blue-500" />

                                <div>
                                  <h4 className="font-medium mb-2">
                                    {item.title}
                                  </h4>

                                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-7">
                                    {item.description}
                                  </p>
                                </div>
                              </div>
                            ))}

                          </div>
                        </div>

                        {/* Impact metrics */}
                        <div className="mb-9">
                          <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">
                            Impact & Scale
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {exp.impact.map((item) => (
                              <span
                                key={item}
                                className="text-sm px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Technologies */}
                        <div>
                          <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">
                            Technologies
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="text-xs px-3 py-2 rounded-md border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                      </div>
                    )}

                  </div>
                </div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
}