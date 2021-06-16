import Cursor from "../attributes/Cursor";
import Selector from "../attributes/Selector";
import UserSelect from "../attributes/UserSelect";
import Clickable from "../base/Clickable";
import generateRandomKey from "../RandomKeyGenerator";

const Button = ({
     all,
     alignContent,
     alignSelf,
     animation,
     animationDelay,
     animationDirection,
     animationDuration,
     animationFillMode,
     animationIterationCount,
     animationName,
     animationPlayState,
     animationTimingFunction,
     animations,
     active,
     backfaceVisibility,
     borderImage,
     background,
     backgroundAttachement,
     backgroundBlendMode,
     backgroundClip,
     backgroundColor,
     backgroundImage,
     backgroundOrigin,
     backgroundPosition,
     backgroundRepeat,
     backgroundSize,
     border,
     borderBottom,
     borderBottomColor,
     borderBottomLeftRadius,
     borderBottomRightRadius,
     borderBottomStyle,
     borderBottomWidth,
     borderCollapse,
     borderColor,
     borderImageOutset,
     borderImageRepeat,
     borderImageSlice,
     borderImageSource,
     borderImageWidth,
     borderLeft,
     borderLeftColor,
     borderLeftStyle,
     borderLeftWidth,
     borderRadius,
     borderRight,
     borderRightColor,
     borderRightStyle,
     borderRightWidth,
     borderSpacing,
     borderStyle,
     borderTop,
     borderTopColor,
     borderTopLeftRadius,
     borderTopRightRadius,
     borderTopStyle,
     borderTopWidth,
     borderWidth,
     bottom,
     boxDecorationBreak,
     boxShadow,
     boxSizing,
     breakAfter,
     breakBefore,
     breakInside,
     caretColor,
     clear,
     className,
     clip,
     content,
     cursor = Cursor.Pointer,
     display,
     emptyCells,
     filter,
     flex,
     flexBasis,
     flexShrink,
     flexWrap,
     flexFlow,
     flexGrow,
     focus,
     font,
     fontSize = "inherit",
     fontFamily = "inherit",
     fontStyle = "inherit",
     fontWeight = "inherit",
     fontKerning,
     fontStretch,
     fontVariant,
     fontVariantCaps,
     hangingPunctuation,
     height,
     hyphens,
     hover,
     hoverTextColor = "white",
     hoverBackgroundColor = "black",
     hoverBorderColor = "white",
     id,
     isolation,
     justifyContent,
     key = generateRandomKey(),
     left,
     letterSpacing,
     lineHeight,
     listStyle,
     listStyleImage,
     listStylePosition,
     listStyleType,
     margin,
     marginBottom,
     marginLeft,
     marginRight,
     marginTop,
     marginHorizontal,
     marginVertical,
     maxWidth,
     maxHeight,
     maxLines,
     minHeight,
     minWidth,
     mixBlendMode,
     objectFit,
     objectPosition,
     opacity,
     order,
     outline,
     outlineColor,
     outlineOffset,
     outlineStyle,
     outlineWidth,
     overflow,
     overflowWrap,
     overflowX,
     overflowY,
     onClick = () => {},
     onClickBackgroundColor = "grey",
     onClickTextColor = "black",
     onClickBorderColor = "grey",
     padding,
     paddingBottom,
     paddingLeft,
     paddingRight,
     paddingTop,
     paddingHorizontal,
     paddingVertical,
     pageBreakAfter,
     pageBreakBefore,
     pageBreakInside,
     perspective,
     perspectiveOrigin,
     position,
     right,
     resize,
     rowGap,
     scrollBehavior,
     tabSize,
     tabLayout,
     text = `Button`,
     textColor = "inherit",
     textAlign = "inherit",
     textAlignLast,
     textDecoration = "inherit",
     textDecorationColor,
     textDecorationLine,
     textDecorationStyle,
     textIndent,
     textJustify = "inherit",
     textOverflow,
     textShadow,
     textTransform = "inherit",
     top,
     transform,
     transformOrigin,
     transformStyle,
     transition,
     transitionDelay,
     transitionDuration,
     transitionProperty,
     transitionTimingFunction,
     visibility,
     verticalAlign,
     width,
     whiteSpace,
     wordBreak,
     wordSpacing,
     wordWrap,
     writingMode,
     userSelect = UserSelect.None,
     zIndex,
}) => {
     return (
          <Clickable
               all={all}
               alignContent={alignContent}
               alignSelf={alignSelf}
               animation={animation}
               animationDelay={animationDelay}
               animationDirection={animationDirection}
               animationDuration={animationDuration}
               animationFillMode={animationFillMode}
               animationIterationCount={animationIterationCount}
               animationName={animationName}
               animationPlayState={animationPlayState}
               animationTimingFunction={animationTimingFunction}
               animations={animations}
               active={
                    active
                         ? active
                         : Selector.new({
                                textColor: onClickTextColor,
                                backgroundColor: onClickBackgroundColor,
                                outlineColor: onClickBorderColor,
                           })
               }
               backfaceVisibility={backfaceVisibility}
               background={background}
               backgroundColor={backgroundColor}
               backgroundAttachement={backgroundAttachement}
               backgroundBlendMode={backgroundBlendMode}
               backgroundClip={backgroundClip}
               backgroundImage={backgroundImage}
               backgroundOrigin={backgroundOrigin}
               backgroundPosition={backgroundPosition}
               backgroundRepeat={backgroundRepeat}
               backgroundSize={backgroundSize}
               border={border}
               bottom={bottom}
               borderBottom={borderBottom}
               borderBottomColor={borderBottomColor}
               borderBottomLeftRadius={borderBottomLeftRadius}
               borderBottomRightRadius={borderBottomRightRadius}
               borderBottomStyle={borderBottomStyle}
               borderBottomWidth={borderBottomWidth}
               borderCollapse={borderCollapse}
               borderColor={borderColor}
               borderImageOutset={borderImageOutset}
               borderImageRepeat={borderImageRepeat}
               borderImageSlice={borderImageSlice}
               borderImageSource={borderImageSource}
               borderImageWidth={borderImageWidth}
               borderLeft={borderLeft}
               borderLeftColor={borderLeftColor}
               borderLeftStyle={borderLeftStyle}
               borderLeftWidth={borderLeftWidth}
               borderRight={borderRight}
               borderRightColor={borderRightColor}
               borderRightStyle={borderRightStyle}
               borderRightWidth={borderRightWidth}
               borderSpacing={borderSpacing}
               borderStyle={borderStyle}
               borderTop={borderTop}
               borderTopColor={borderTopColor}
               borderTopLeftRadius={borderTopLeftRadius}
               borderTopRightRadius={borderTopRightRadius}
               borderTopStyle={borderTopStyle}
               borderTopWidth={borderTopWidth}
               borderWidth={borderWidth}
               borderImage={borderImage}
               borderRadius={borderRadius}
               boxDecorationBreak={boxDecorationBreak}
               boxShadow={boxShadow}
               boxSizing={boxSizing}
               breakAfter={breakAfter}
               breakBefore={breakBefore}
               breakInside={breakInside}
               caretColor={caretColor}
               clear={clear}
               className={className}
               clip={clip}
               color={textColor}
               content={content}
               cursor={cursor}
               display={display}
               emptyCells={emptyCells}
               filter={filter}
               flex={flex}
               flexBasis={flexBasis}
               flexShrink={flexShrink}
               flexWrap={flexWrap}
               flexFlow={flexFlow}
               flexGrow={flexGrow}
               font={font}
               fontSize={fontSize}
               fontFamily={fontFamily}
               fontStyle={fontStyle}
               fontWeight={fontWeight}
               fontKerning={fontKerning}
               fontStretch={fontStretch}
               fontVariant={fontVariant}
               fontVariantCaps={fontVariantCaps}
               focus={focus}
               hangingPunctuation={hangingPunctuation}
               height={height}
               hyphens={hyphens}
               hover={
                    hover
                         ? hover
                         : Selector.new({
                                textColor: hoverTextColor,
                                backgroundColor: hoverBackgroundColor,
                                outlineColor: hoverBorderColor,
                           })
               }
               id={id}
               isolation={isolation}
               justifyContent={justifyContent}
               key={key}
               left={left}
               letterSpacing={letterSpacing}
               lineHeight={lineHeight}
               listStyle={listStyle}
               listStyleImage={listStyleImage}
               listStylePosition={listStylePosition}
               listStyleType={listStyleType}
               margin={margin}
               marginBottom={marginBottom}
               marginLeft={marginLeft}
               marginRight={marginRight}
               marginTop={marginTop}
               marginHorizontal={marginHorizontal}
               marginVertical={marginVertical}
               maxWidth={maxWidth}
               maxHeight={maxHeight}
               maxLines={maxLines}
               minHeight={minHeight}
               minWidth={minWidth}
               mixBlendMode={mixBlendMode}
               objectFit={objectFit}
               objectPosition={objectPosition}
               opacity={opacity}
               order={order}
               outline={outline}
               outlineColor={outlineColor}
               outlineOffset={outlineOffset}
               outlineStyle={outlineStyle}
               outlineWidth={outlineWidth}
               overflow={overflow}
               overflowWrap={overflowWrap}
               overflowX={overflowX}
               overflowY={overflowY}
               onClick={() => {
                    onClick();
               }}
               padding={padding}
               paddingBottom={paddingBottom}
               paddingLeft={paddingLeft}
               paddingRight={paddingRight}
               paddingTop={paddingTop}
               paddingHorizontal={paddingHorizontal}
               paddingVertical={paddingVertical}
               pageBreakAfter={pageBreakAfter}
               pageBreakBefore={pageBreakBefore}
               pageBreakInside={pageBreakInside}
               perspective={perspective}
               perspectiveOrigin={perspectiveOrigin}
               position={position}
               right={right}
               resize={resize}
               rowGap={rowGap}
               scrollBehavior={scrollBehavior}
               tabSize={tabSize}
               tabLayout={tabLayout}
               textColor={textColor}
               textAlign={textAlign}
               textAlignLast={textAlignLast}
               textDecoration={textDecoration}
               textDecorationColor={textDecorationColor}
               textDecorationLine={textDecorationLine}
               textDecorationStyle={textDecorationStyle}
               textIndent={textIndent}
               textJustify={textJustify}
               textOverflow={textOverflow}
               textShadow={textShadow}
               textTransform={textTransform}
               top={top}
               transform={transform}
               transformOrigin={transformOrigin}
               transformStyle={transformStyle}
               transition={transition}
               transitionDelay={transitionDelay}
               transitionDuration={transitionDuration}
               transitionProperty={transitionProperty}
               transitionTimingFunction={transitionTimingFunction}
               userSelect={userSelect}
               visibility={visibility}
               verticalAlign={verticalAlign}
               width={width}
               whiteSpace={whiteSpace}
               wordBreak={wordBreak}
               wordSpacing={wordSpacing}
               wordWrap={wordWrap}
               writingMode={writingMode}
               zIndex={zIndex}
               children={`${text}`}
          />
     );
};
export default Button;
