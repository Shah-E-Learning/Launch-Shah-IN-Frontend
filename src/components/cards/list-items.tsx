'use client'

import React, { JSX } from 'react'

import Image from 'next/image'

import { cn } from '@/lib/utils'

import { useMediaQuery } from '@/hooks/use-media'

import { InfoIcon } from 'lucide-react'
import IcCheck from '../svg/IcCheck'
import ScreenWrapper from '@components/wrapper/screen-wrapper'

interface ListSection {
  title?: string
  title2?: string
  items: Array<any>
  listInside?: string
  listTitleStyle?: string
}

interface ListItemsProps {
  listTitle: string
  imageTitle?: string
  imageDescription?: string
  listTitle2?: string
  listTitle3?: string
  romanText?: string
  image?: any
  variant?: 'primary' | 'secondary' | 'tertiary' | 'tertiary1'
  listArray?: Array<any>
  sections?: Array<ListSection>
  titleSize?: string
  mainStyle?: string
  titleSize2?: string
  mainGrid?: string
}

const getStyles = (variant = 'primary') =>
  (
    ({
      primary: { bg: 'bg-mainColor', txt: 'text-white', stroke: 'white' },
      secondary: { bg: 'bg-secondaryColor/10', txt: 'text-mainColor', stroke: 'black' },
      tertiary1: { bg: 'bg-transparent', txt: 'text-white', stroke: 'white' },
      tertiary: { bg: 'bg-transparent', txt: 'text-mainColor', stroke: 'black' },
      roman: { bg: '', txt: 'listRoman', stroke: '' },
      bullets: { bg: '', txt: 'list-disc', stroke: '' },
      decimal: { bg: '', txt: 'list-decimal', stroke: '' },
      alpha: { bg: '', txt: 'list-alpha', stroke: '' }
    }) as Record<string, { bg: string; txt: string; stroke: string }>
  )[variant] || { bg: '', txt: '', stroke: '' }

const renderItems = (items: any[], level = 0, variant: string, styles: any) =>
  items.map((method, idx) => {
    const keys = Object.keys(method)
    const contentBlocks: JSX.Element[] = []

    // Helper: render paragraph (name, name1, name2, etc.)
    const renderParagraph = (key: string, value: string) => {
      const isMain = key === 'name'
      const isSub = ['name1', 'name2', 'name3', 'name4', 'name5', 'name6'].includes(key)

      return (
        <div key={key} className={cn('flex items-baseline gap-4', isSub && 'mt-1 pl-8')}>
          {isMain && !method.title && !method.ListTitleText && value && (
            <IcCheck className='h-4 w-4 shrink-0 md:h-5 md:w-5' stroke={styles.stroke} />
          )}
          <p className={cn(method.itemTopic, 'mt-1')}>
            {value.split('■').map((part: string, i: number, arr: string[]) => (
              <React.Fragment key={i}>
                {key === 'title' ? <span className='whitespace-pre-line'>{part.replace(/\\n/g, '\n')}</span> : part}
                {i < arr.length - 1 && <span style={{ color: 'purple', fontSize: '2rem' }}>■</span>}
              </React.Fragment>
            ))}
          </p>
        </div>
      )
    }

    // Process all keys in order
    for (const key of keys) {
      const value = method[key]

      // Skip config flags
      if (key.endsWith('bullets') || key.endsWith('roman') || key.endsWith('alpha')) continue
      if (['itemTopic', 'no'].includes(key)) continue

      // === Handle ListTitleText ===
      if (key === 'ListTitleText' && typeof value === 'string') {
        contentBlocks.push(
          <div
            key='ListTitleText'
            className={cn(method.itemTopic, 'flex items-baseline gap-4')}
            style={{ paddingLeft: `${(level + 0.5) * 3}rem` }}
          >
            <p>{method.no}.</p>
            <p className='mt-1'>
              {value.split('■').map((part: string, i: number, arr: string[]) => (
                <React.Fragment key={i}>
                  {part}
                  {i < arr.length - 1 && <span style={{ color: 'purple', fontSize: '2rem' }}>■</span>}
                </React.Fragment>
              ))}
            </p>
          </div>
        )
        continue
      }

      // === Handle ListTitleText1, ListTitleText2, etc. ===
      if (key.startsWith('ListTitleText') && key !== 'ListTitleText' && typeof value === 'string') {
        contentBlocks.push(
          <div key={key} className='flex items-baseline gap-4' style={{ paddingLeft: `${(level + 1.1) * 3}rem` }}>
            <p className='mt-1'>
              {value.split('■').map((part: string, i: number, arr: string[]) => (
                <React.Fragment key={i}>
                  {part}
                  {i < arr.length - 1 && <span style={{ color: 'purple', fontSize: '2rem' }}>■</span>}
                </React.Fragment>
              ))}
            </p>
          </div>
        )
        continue
      }

      // === Handle subtopic, subtopic2, subtopic3, ... ===
      if (key.match(/^subtopic(\d*)$/) && Array.isArray(value) && value.length > 0) {
        const num = key === 'subtopic' ? '' : key.replace('subtopic', '')
        const bullets = method[`subtopic${num}bullets`]
        const roman = method[`subtopic${num}roman`]
        const alpha = method[`subtopic${num}alpha`]
        const check = method[`subtopic${num}check`]

        const listStyle = bullets
          ? 'list-disc'
          : roman
            ? 'listRoman'
            : alpha
              ? 'list-alpha'
              : check
                ? ''
                : 'list-decimal'

        contentBlocks.push(
          <ul
            key={key}
            className={cn(listStyle, 'my-5 space-y-3', styles.txt)}
            style={{ paddingLeft: `${check ? 0 : (level + 1.5) * 3}rem` }}
          >
            {value.map((sub: any, sIdx: number) => {
              // Preserve object key order
              const orderedKeys = Object.keys(sub).filter(k => k.startsWith('sub_name'))

              return (
                <div key={sIdx} className={cn(check && 'flex items-baseline gap-4')}>
                  {check && <IcCheck className='h-4 w-4 shrink-0 md:h-5 md:w-5' stroke={styles.stroke} />}
                  <li key={sIdx} className='mt-1'>
                    <div
                      className={cn(
                        'main-description-small text-muted-foreground font-medium',
                        styles.txt,
                        sub.bold_full && 'font-bold',
                        sub.subtopicStyle
                      )}
                    >
                      {orderedKeys.map((key, idx) => {
                        const value = sub[key]
                        const isInside = key.startsWith('sub_name_inside_subtopic')
                        const isBoldTitle = key === 'sub_name' && sub.bold_title

                        return (
                          <div key={idx} className={isInside ? 'flex items-baseline gap-2' : ''}>
                            {isInside && <InfoIcon className='h-4 w-4 shrink-0 font-bold' />}
                            <p className={cn('mt-1', !isInside && sub.bold_full && 'font-bold')}>
                              {isBoldTitle ? (
                                <>
                                  <strong>{value.split(':')[0]}:</strong>
                                  {value.split(':').slice(1).join(':')}
                                </>
                              ) : (
                                value.split('■').map((part: string, i: number, arr: string[]) => (
                                  <React.Fragment key={i}>
                                    {part}
                                    {i < arr.length - 1 && (
                                      <span style={{ color: 'purple', fontSize: '1.5rem' }}>■</span>
                                    )}
                                  </React.Fragment>
                                ))
                              )}
                            </p>
                          </div>
                        )
                      })}
                    </div>
                    {sub.insideSubtopic && (
                      <ul
                        className={cn(
                          sub.listStyle ? getStyles(sub.listStyle).txt : 'list-disc',
                          'my-5 space-y-2',
                          styles.txt
                        )}
                        style={{ paddingLeft: `${(level + 1.5) * 3}rem` }}
                      >
                        {sub.insideSubtopic.map((inner: any, iIdx: number) => (
                          <li key={iIdx}>
                            <div
                              className={cn(
                                'main-description-small text-muted-foreground font-medium',
                                styles.txt,
                                inner.bold_full && 'font-bold',
                                inner.insideSubtopicStyle
                              )}
                            >
                              {inner.bold_title ? (
                                <>
                                  <strong>{inner.sub_name?.split(':')[0]}:</strong>
                                  {inner.sub_name?.split(':')?.slice(1).join(':')}
                                </>
                              ) : (
                                inner.sub_name
                              )}
                            </div>

                            {inner.insideSubtopicSubData?.length > 0 && (
                              <ul
                                className={cn(
                                  inner.listStyle ? getStyles(inner.listStyle).txt : 'list-disc',
                                  'my-5 space-y-2 pl-[calc((var(--level)+1)*3rem)] pl-[calc((var(--level)+2)*3rem)] lg:pl-[calc((var(--level)+2)*3rem)]',
                                  styles.txt
                                )}
                                style={
                                  {
                                    // Pass the current nesting level as a CSS variable
                                    '--level': level
                                  } as React.CSSProperties
                                }
                              >
                                {inner.insideSubtopicSubData.map((deep: any, dIdx: number) => (
                                  <li key={dIdx}>
                                    <div
                                      className={cn(
                                        'main-description-small text-muted-foreground font-medium',
                                        styles.txt,
                                        deep.bold_full && 'font-bold',
                                        deep.insideSubtopicSubDataStyle
                                      )}
                                    >
                                      {deep.bold_title ? (
                                        <>
                                          <strong>{deep.sub_name?.split(':')[0]}:</strong>
                                          {deep.sub_name?.split(':')?.slice(1).join(':')}
                                        </>
                                      ) : (
                                        deep.sub_name
                                      )}
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                </div>
              )
            })}

            {/* {value.map((sub: any, sIdx: number) => {
              const orderedKeys: string[] = []

              // 1. plain sub_name first
              if (sub.sub_name) orderedKeys.push("sub_name")

              // 2. numbered sub_name excluding sub_name3
              Object.keys(sub)
                .filter(k => /^sub_name\d+$/.test(k) && k !== "sub_name3")
                .sort((a, b) => parseInt(a.replace("sub_name", "")) - parseInt(b.replace("sub_name", "")))
                .forEach(k => orderedKeys.push(k))

              // 3. all sub_name_inside_subtopic* keys
              Object.keys(sub)
                .filter(k => /^sub_name_inside_subtopic\d+$/.test(k))
                .sort((a, b) => parseInt(a.replace("sub_name_inside_subtopic", "")) - parseInt(b.replace("sub_name_inside_subtopic", "")))
                .forEach(k => orderedKeys.push(k))

              // 4. add sub_name3 last
              if (sub.sub_name3) orderedKeys.push("sub_name3")

              return (
                <div key={sIdx} className={cn(check && "flex items-baseline gap-4")}>
                  {check && <IcCheck className="shrink-0 w-4 h-4 md:w-5 md:h-5" stroke={styles.stroke} />}
                  <li key={sIdx} className="mt-1">
                    <div className={cn(
                      "font-medium main-description-small text-muted-foreground",
                      styles.txt,
                      sub.bold_full && "font-bold",
                      sub.subtopicStyle
                    )}>
                      {orderedKeys.map((key, idx) => {
                        const value = sub[key]
                        const isInside = key.startsWith("sub_name_inside_subtopic")
                        const isBoldTitle = sub.bold_title && key === "sub_name"

                        return (
                          <div key={idx} className={isInside ? "flex items-baseline gap-2" : ""}>
                            {isInside && <InfoIcon className="w-4 h-4 font-bold shrink-0" />}
                            <p className={cn("mt-1", !isInside && sub.bold_full && "font-bold")}>
                              {isBoldTitle ? (
                                <>
                                  <strong>{value.split(":")[0]}:</strong>
                                  {value.split(":").slice(1).join(":")}
                                </>
                              ) : (
                                value.split("■").map((part: string, i: number, arr: string[]) => (
                                  <React.Fragment key={i}>
                                    {part}
                                    {i < arr.length - 1 && <span style={{ color: "purple", fontSize: "1.5rem" }}>■</span>}
                                  </React.Fragment>
                                ))
                              )}
                            </p>
                          </div>
                        )
                      })}
                    </div>
                  </li>
                </div>
              )
            })} */}

            {/* {value.map((sub: any, sIdx: number) => {
              const subNameKeys = Object.keys(sub)
                .filter(k => /^sub_name(\d+)?$/.test(k))
                .sort((a, b) => {
                  const aNum = parseInt(a.replace('sub_name', '')) || 0
                  const bNum = parseInt(b.replace('sub_name', '')) || 0

                  return aNum - bNum
                })



              const insideSubtopicKeys = Object.keys(sub)
                .filter(k => /^sub_name_inside_subtopic\d+$/.test(k))
                .sort((a, b) => {
                  const aNum = parseInt(a.replace("sub_name_inside_subtopic", "")) || 0
                  const bNum = parseInt(b.replace("sub_name_inside_subtopic", "")) || 0

                  return aNum - bNum
                });

              return <div key={sIdx} className={cn(check && 'flex items-baseline gap-4')} >
                {check && <IcCheck className='shrink-0 w-4 h-4 md:w-5 md:h-5' stroke={styles.stroke} />}
                <li key={sIdx} className='mt-1'>
                  <div
                    className={cn(
                      'font-medium main-description-small text-muted-foreground',
                      styles.txt,
                      sub.bold_full && 'font-bold',
                      sub.subtopicStyle
                    )}
                  >
                    {sub.bold_title && sub.sub_name?.includes(':') ? (
                      <>
                        <strong>{sub.sub_name.split(':')[0]}:</strong>
                        {sub.sub_name.split(':').slice(1).join(':')}
                      </>
                    ) : (
                      sub.sub_name
                    )}

                    {subNameKeys.map((key, idx) => (
                      <p key={idx} className="mt-1">
                        {sub[key].split('■').map((part: string, i: number, arr: string[]) => (
                          <React.Fragment key={i}>
                            {part}
                            {i < arr.length - 1 && <span style={{ color: 'purple', fontSize: '1.5rem' }}>■</span>}
                          </React.Fragment>
                        ))}
                      </p>
                    ))}

                    {insideSubtopicKeys.map((key, idx) => (
                      <div key={idx} className="flex items-baseline gap-2">
                        <InfoIcon className="w-4 h-4 font-bold shrink-0" />
                        <p className="mt-1">
                          {sub[key].split('■').map((part: string, i: number, arr: string[]) => (
                            <React.Fragment key={i}>
                              {part}
                              {i < arr.length - 1 && <span style={{ color: 'purple', fontSize: '1.5rem' }}>■</span>}
                            </React.Fragment>
                          ))}
                        </p>
                      </div>
                    ))}


                  
                  </div>

                 
                  {sub.insideSubtopic && (
                    <ul
                      className={cn(
                        sub.listStyle ? getStyles(sub.listStyle).txt : 'list-disc',
                        'space-y-2 my-5',
                        styles.txt
                      )}
                      style={{ paddingLeft: `${(level + 1.5) * 3}rem` }}
                    >
                      {sub.insideSubtopic.map((inner: any, iIdx: number) => (
                        <li key={iIdx}>
                          <div
                            className={cn(
                              'font-medium main-description-small text-muted-foreground',
                              styles.txt,
                              inner.bold_full && 'font-bold',
                              inner.insideSubtopicStyle
                            )}
                          >
                            {inner.bold_title ? (
                              <>
                                <strong>{inner.sub_name?.split(':')[0]}:</strong>
                                {inner.sub_name?.split(':')?.slice(1).join(':')}
                              </>
                            ) : (
                              inner.sub_name
                            )}
                          </div>

                          {inner.insideSubtopicSubData?.length > 0 && (
                            <ul
                              className={cn(
                                inner.listStyle ? getStyles(inner.listStyle).txt : 'list-disc',
                                'space-y-2 my-5 pl-[calc((var(--level)+2)*3rem)] pl-[calc((var(--level)+1)*3rem)] lg:pl-[calc((var(--level)+2)*3rem)]',
                                styles.txt
                              )}
                              style={
                                {
                                  // Pass the current nesting level as a CSS variable
                                  '--level': level
                                } as React.CSSProperties
                              }
                            >
                              {inner.insideSubtopicSubData.map((deep: any, dIdx: number) => (
                                <li key={dIdx}>
                                  <div
                                    className={cn(
                                      'font-medium main-description-small text-muted-foreground',
                                      styles.txt,
                                      deep.bold_full && 'font-bold',
                                      deep.insideSubtopicSubDataStyle
                                    )}
                                  >
                                    {deep.bold_title ? (
                                      <>
                                        <strong>{deep.sub_name?.split(':')[0]}:</strong>
                                        {deep.sub_name?.split(':')?.slice(1).join(':')}
                                      </>
                                    ) : (
                                      deep.sub_name
                                    )}
                                  </div>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              </div>
            }
            )} */}
          </ul>
        )
        continue
      }

      // === Handle name, name1, name2, name3, name4, title ===
      if (
        ['title', 'name', 'name1', 'name2', 'name3', 'name4', 'name5', 'name6'].includes(key) &&
        typeof value === 'string'
      ) {
        contentBlocks.push(renderParagraph(key, value))
      }
    }

    return (
      <div key={idx} style={{ paddingLeft: `${level * 2.5}rem` }}>
        <li className='flex items-baseline gap-4'>
          <ul className={cn('main-description-small text-muted-foreground font-medium !leading-snug', styles.txt)}>
            {contentBlocks}
          </ul>
        </li>
      </div>
    )
  })

const ListContent = ({
  listTitle,
  listTitle2,
  listTitle3,
  titleSize,
  titleSize2,
  romanText,
  variant,
  styles,
  listArray,
  sections,
  mainStyle
}: {
  listTitle?: string
  listTitle2?: string
  listTitle3?: string
  titleSize?: string
  titleSize2?: string
  romanText?: string
  variant: string
  styles: any
  listArray?: any[]
  sections?: ListSection[]
  mainStyle?: string
}) => {
  const isLargeScreen = useMediaQuery('(min-width: 1024px)') // lg breakpoint

  const indent = !romanText
    ? ''
    : romanText === 'I.' || romanText === 'V.'
      ? `${isLargeScreen ? 'pl-[2rem]' : 'pl-[0.5rem]'} `
      : romanText === 'II.'
        ? `${isLargeScreen ? 'pl-[3.5rem]' : 'pl-[0.8rem]'} `
        : (listTitle2 || listTitle3) && (romanText === 'I.' || romanText === 'II.' || romanText === 'V.')
          ? `${isLargeScreen ? 'pl-[4.5rem]' : 'pl-[1.2rem]'} `
          : listTitle2 || listTitle3
            ? `${isLargeScreen ? 'pl-[6.5rem]' : 'pl-[1.5rem]'} `
            : !['I.', 'II.', 'V.'].includes(romanText as string)
              ? `${isLargeScreen ? 'pl-[4.5rem]' : 'pl-[1.2rem]'} `
              : ''

  return (
    <div className={cn('flex flex-col gap-2', mainStyle)}>
      {/* Roman + main title */}
      {romanText && (
        <div className='flex items-start gap-2'>
          {romanText && (
            <h2
              className={cn(
                `main-title hidden font-bold leading-tight ${listTitle ? '' : 'mb-8'} ${titleSize}`,
                styles.txt
              )}
            >
              {romanText}
            </h2>
          )}

          {listTitle && (
            <h2 className={cn(`main-title mb-8 font-bold leading-tight ${titleSize}`, styles.txt)}>
              {/* 🖥️ Desktop — break at \n */}
              <span
                className='hidden whitespace-pre-line md:block'
                dangerouslySetInnerHTML={{
                  __html: listTitle.replace(/\\n|\/n|\n/g, '<br/>')
                }}
              />

              {/* 📱 Mobile — single line */}
              <span className='block whitespace-normal md:hidden'>{listTitle.replace(/\\n|\/n|\n/g, ' ')}</span>
            </h2>
          )}
        </div>
      )}

      {/* Sub-titles & list */}
      <div className={indent}>
        {listTitle2 && (
          <h2
            className={cn(`main-title font-bold leading-tight ${listTitle3 ? '' : 'mb-8'} ${titleSize2}`, styles.txt)}
          >
            {listTitle2}
          </h2>
        )}
        {listTitle3 && (
          <h2 className={cn(`main-title mb-8 font-bold leading-tight ${titleSize2}`, styles.txt)}>{listTitle3}</h2>
        )}

        {sections ? (
          sections.map((sec, i) => (
            <div key={i} className={'mb-8'}>
              {sec.title && (
                <h3 className={cn('main-description-small mb-4 font-bold', sec.listTitleStyle, styles.txt)}>
                  {sec.title}
                </h3>
              )}
              <ul className={`space-y-4 ${sec.listInside}`}>{renderItems(sec.items, 0, variant, styles)}</ul>
            </div>
          ))
        ) : (
          <ul className='space-y-4'>{listArray && renderItems(listArray, 0, variant, styles)}</ul>
        )}
      </div>
    </div>
  )
}

const ListItems = ({
  image,
  imageTitle,
  imageDescription,
  listTitle,
  romanText,
  variant = 'primary',
  listArray,
  sections,
  titleSize,
  mainStyle,
  titleSize2,
  listTitle2,
  listTitle3,
  mainGrid
}: ListItemsProps) => {
  const styles = getStyles(variant)

  /* ---- 1. Do we have BOTH imageTitle + imageDescription? ---- */
  const showTitleAboveGrid = image && imageTitle && imageDescription

  /* ---- 2. Do we need the 2-column grid (list vs image)? ---- */
  const useGrid = image && imageTitle && imageDescription

  const isLargeScreen = useMediaQuery('(min-width: 1024px)') // lg breakpoint

  const indent = !romanText
    ? ''
    : romanText === 'I.' || romanText === 'V.'
      ? `${isLargeScreen ? 'pl-[2rem]' : 'pl-[0.5rem]'} `
      : romanText === 'II.'
        ? `${isLargeScreen ? 'pl-[3.5rem]' : 'pl-[0.8rem]'} `
        : imageDescription && (romanText === 'I.' || romanText === 'II.' || romanText === 'V.')
          ? `${isLargeScreen ? 'pl-[4.5rem]' : 'pl-[1.2rem]'} `
          : imageDescription
            ? `${isLargeScreen ? 'pl-[6.5rem]' : 'pl-[1.5rem]'} `
            : !['I.', 'II.', 'V.'].includes(romanText as string)
              ? `${isLargeScreen ? 'pl-[4.5rem]' : 'pl-[1.2rem]'} `
              : ''

  // const indent =
  //   romanText === 'I.'
  //     ? 'pl-[2rem]'
  //     : imageDescription && (romanText === 'I.' || romanText === 'II.' || romanText === 'V.')
  //       ? 'pl-[3.5rem]'
  //       : imageDescription
  //         ? 'pl-[6.5rem]'
  //         : 'pl-[4.5rem]'

  return (
    <ScreenWrapper className={cn('relative z-10 rounded-[32px] md:px-4 lg:px-20', styles.bg)}>
      {/* ----------  TITLE / DESCRIPTION ABOVE GRID (when both exist) ---------- */}
      {showTitleAboveGrid && (
        <div className={cn('space-y-2 py-5 lg:py-16', mainGrid || '')}>
          <div className='flex items-start gap-2'>
            {romanText && imageTitle && (
              <h2
                className={cn(
                  `main-title font-bold leading-tight ${listTitle2 ? '' : 'mb-8'} ${titleSize}`,
                  styles.txt
                )}
              >
                {romanText}
              </h2>
            )}
            <h2 className={cn(`main-title mb-4 font-bold leading-tight ${titleSize}`, styles.txt)}>{imageTitle}</h2>
          </div>
          <h6
            className={cn(
              `main-description font-medium !leading-relaxed ${romanText ? indent : ''} ${titleSize}`,
              styles.txt
            )}
          >
            {imageDescription}
          </h6>
        </div>
      )}

      {/* ----------  GRID (list + image) ---------- */}
      <div className={cn(useGrid && 'grid gap-8 2xl:grid-cols-2')}>
        {/* ---- LEFT: list content ---- */}
        <div className={cn('space-y-2 py-5 lg:py-16', mainGrid || '')}>
          <div className='text-content'>
            {/* Normal title (only when we are NOT showing it above) */}
            {!showTitleAboveGrid && romanText && (
              <div className={`flex items-start gap-2`}>
                {romanText && listTitle && (
                  <h2
                    className={cn(
                      `main-title font-bold leading-tight ${listTitle2 ? '' : 'mb-8'} ${titleSize}`,
                      styles.txt
                    )}
                  >
                    {romanText}
                  </h2>
                )}

                {listTitle && (
                  <h2
                    className={cn(
                      `main-title font-bold leading-tight ${listTitle2 ? '' : 'mb-8'} ${titleSize}`,
                      styles.txt
                    )}
                  >
                    {/* 🖥️ Desktop — break at \n */}
                    <span
                      className='hidden whitespace-pre-line md:block'
                      dangerouslySetInnerHTML={{
                        __html: listTitle.replace(/\\n|\/n|\n/g, '<br/>')
                      }}
                    />

                    {/* 📱 Mobile — single line */}
                    <span className='block whitespace-normal md:hidden'>{listTitle.replace(/\\n|\/n|\n/g, ' ')}</span>
                  </h2>
                )}

                {/* <h2
                  className={cn(
                    `main-title font-bold leading-tight ${listTitle2 ? '' : 'mb-8'} ${titleSize}`,
                    styles.txt
                  )}
                >
                  {listTitle}
                </h2> */}
              </div>
            )}

            {!showTitleAboveGrid && !romanText && (
              <h2
                className={cn(
                  `main-title font-bold leading-tight ${listTitle2 ? '' : 'mb-8'} ${titleSize}`,
                  styles.txt
                )}
              >
                {/* 🖥️ Desktop — break at \n */}
                <span
                  className='hidden whitespace-pre-line md:block'
                  dangerouslySetInnerHTML={{
                    __html: listTitle.replace(/\\n|\/n|\n/g, '<br/>')
                  }}
                />

                {/* 📱 Mobile — single line */}
                <span className='block whitespace-normal md:hidden'>{listTitle.replace(/\\n|\/n|\n/g, ' ')}</span>
              </h2>
            )}

            {/* Sub-titles + list */}
            <ListContent
              listTitle={listTitle2}
              listTitle2={listTitle3}
              titleSize2={titleSize2}
              romanText={romanText}
              variant={variant}
              styles={styles}
              listArray={listArray}
              sections={sections}
              mainStyle={mainStyle}
            />
          </div>
        </div>

        {/* ---- RIGHT: image (only in grid mode) ---- */}
        {useGrid && (
          <div className='relative hidden p-4 !pb-0 2xl:flex'>
            <Image
              src={image}
              alt='Illustration'
              width={800}
              height={800}
              draggable={false}
              className='user-select-none self-end object-contain'
              priority
              quality={100}
            />
          </div>
        )}
      </div>

      {/* ----------  MOBILE BACKGROUND (when image exists but no grid) ---------- */}
      {image && !useGrid && (
        <div
          className='pointer-events-none absolute inset-0 block bg-contain bg-center bg-no-repeat opacity-10 2xl:hidden'
          style={{ backgroundImage: `url(${image.src})` }}
        />
      )}
    </ScreenWrapper>
  )
}

export default ListItems
