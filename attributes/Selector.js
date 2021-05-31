import Display from "./Display";
import FlexDirection from "./FlexDirection";
import AlignContent from "./AlignContent";
import AlignItems from "./AlignItems";
import AlignSelf from "./AlignSelf";
import BackfaceVisibility from "./BackfaceVisibility";
import BackgroundBlendMode from "./BackgroundBlendMode";
import BackgroundClip from "./BackgroundClip";
import BackgroundColor from "./BackgroundColor";
import BackgroundOrigin from "./BackgroundOrigin";
import BackgroundPosition from "./BackgroundPosition";
import BackgroundRepeat from "./BackgroundRepeat";
import BackgroundSize from "./BackgroundSize";
import BackgroundAttachement from "./BackgroundAttachment";
import BorderStyle from "./BorderStyle";
import BorderWidth from "./BorderWidth";
import Colors from "./Colors";
import BorderRadius from "./BorderRadius";
import BorderImageOutset from "./BorderImageOutset";
import BorderImageSlice from "./BorderImageSlice";
import BorderImageRepeat from "./BorderImageRepeat";
import BorderImageSource from "./BorderImageSource";
import BorderImageWidth from "./BorderImageWidth";
import Length from "./Length";
import BoxDecorationBreak from "./BoxDecorationBreak";
import BoxSizing from "./BoxSizing";
import BorderCollapse from "./BorderCollapse";
import BreakAfter from "./BreakAfter";
import BreakInside from "./BreakInside";
import BreakBefore from "./BreakBefore";
import BorderSpacing from "./BorderSpacing";
import ColumnCount from "./ColumnCount";
import ColumnFill from "./ColumnFill";
import FontSize from "./FontSize";
import FontStyle from "./FontStyle";
import FontWeight from "./FontWeight";
import FontStretch from "./FontStretch";
import Height from "./Height";
import Side from "./Side";
import Position from "./Position";
import Padding from "./Padding";
import Margin from "./Margin";
import Opacity from "./Opacity";
import JustifyContent from "./JustifyContent";
import FlexBasis from "./FlexBasis";
import FlexWrap from "./FlexWrap";
import FlexGrow from "./FlexGrow";
import FlexShrink from "./FlexShrink";
import TextAlign from "./TextAlign";
import TextJustify from "./TextJustify";
import TextAlignLast from "./TextAlignLast";
import TextDecorationStyle from "./TextDecorationStyle";
import TextDecorationLine from "./TextDecorationLine";
import GridTemplate from "./GridTemplate";
import RowGap from "./RowGap";
import ColumnGap from "./ColumnGap";
import GridAutoRows from "./GridAutoRows";
import GridAutoColumns from "./GridAutoColumns";
import GridAutoFlow from "./GridAutoFlow";
import GridTemplateColumn from "./GridTemplateColumn";
import GridTemplateRow from "./GridTemplateRow";
import GridRow from "./GridRow";
import GridColumn from "./GridColumn";
import GridColumnStart from "./GridColumnStart";
import GridRowStart from "./GridRowStart";
import GridColumnEnd from "./GridColumnEnd";
import GridRowEnd from "./GridRowEnd";
import CaptionSide from "./CaptionSide";
import Clear from "./Clear";
import Direction from "./Direction";
import EmptyCells from "./EmptyCells";
import Float from "./Float";
import FontKerning from "./FontKerning";
import FontVariant from "./FontVariant";
import FontVariantCaps from "./FontVariantCaps";
import HangingPunctuation from "./HangingPunctuation";
import Hyphens from "./Hyphens";
import Isolation from "./Isolation";
import LetterSpacing from "./LetterSpacing";
import LineHeight from "./LineHeight";
import ListStylePosition from "./ListStylePosition";
import ListStyleType from "./ListStyleType";
import MixBlendMode from "./MixBlendMode";
import ObjectFit from "./ObjectFit";
import ObjectPosition from "./ObjectPosition";
import Order from "./Order";
import OutlineOffset from "./OutlineOffset";
import OutlineStyle from "./OutlineStyle";
import OutlineWidth from "./OutlineWidth";
import Overflow from "./Overflow";
import OverflowX from "./OverflowX";
import OverflowY from "./OverflowY";
import TextIndent from "./TextIndent";
import TabSize from "./TabSize";
import TextTransform from "./TextTransform";
import VerticalAlign from "./VerticalAlign";
import ScrollBehavior from "./ScrollBehavior";
import Visibility from "./Visibility";
import WordBreak from "./WordBreak";
import WordSpacing from "./WordSpacing";
import WritingMode from "./WritingMode";
import ZIndex from "./ZIndex";
import UserSelect from "./UserSelect";
import WhiteSpace from "./WhiteSpace";
import PageBreakInside from "./PageBreakInside";
import PageBreakBefore from "./PageBreakBefore";
import PageBreakAfter from "./PageBreakAfter";
import Perspective from "./Perspective";
import ColumnRuleStyle from "./ColumnRuleStyle";
import ColumnSpan from "./ColumnSpan";
import Cursor from "./Cursor";
import Transform from "./Transform";
import TransformOrigin from "./TransformOrigin";
import TransformStyle from "./TransformStyle";
import AnimationDelay from "./AnimationDelay";
import AnimationDirection from "./AnimationDirection";
import AnimationDuration from "./AnimationDuration";
import AnimationFillMode from "./AnimationFillMode";
import AnimationIterationCount from "./AnimationIterationCount";
import AnimationPlayState from "./AnimationPlayState";
import AnimationTimingFunction from "./AnimationTimingFunction";
import Clip from "./Clip";
import TransitionDelay from "./TransitionDelay";
import TransitionDuration from "./TransitionDuration";
import TransitionTimingFunction from "./TransitionTimingFunction";
import Border from "./Border";
import All from "./All";

class Selector {
     static new({
          all,
          alignContent,
          alignItems,
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
          captionSide,
          caretColor,
          clear,
          clip,
          columnCount,
          columnFill,
          columnRule,
          columnRuleColor,
          columnRuleStyle,
          columnRuleWidth,
          columnSpan,
          columnWidth,
          columns,
          content,
          cursor,
          direction,
          display,
          emptyCells,
          filter,
          flex,
          flexBasis,
          flexShrink,
          flexDirection,
          flexWrap,
          flexFlow,
          flexGrow,
          font,
          float,
          fontSize,
          fontFamily,
          fontStyle,
          fontWeight,
          fontKerning,
          fontStretch,
          fontVariant,
          fontVariantCaps,
          gap,
          grid,
          gridArea,
          gridAutoColumn,
          gridAutoRow,
          gridAutoFlow,
          gridColumn,
          gridColumnEnd,
          gridColumnGap,
          gridColumnStart,
          gridGap,
          gridRow,
          gridRowEnd,
          gridRowGap,
          gridRowStart,
          gridTemplate,
          gridTemplateAreas,
          gridTemplateColumns,
          gridTemplateRows,
          hangingPunctuation,
          height,
          hyphens,
          isolation,
          justifyContent,
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
          textColor,
          textAlign,
          textAlignLast,
          textDecoration,
          textDecorationColor,
          textDecorationLine,
          textDecorationStyle,
          textIndent,
          textJustify,
          textOverflow,
          textShadow,
          textTransform,
          top,
          transform,
          transformOrigin,
          transformStyle,
          transition,
          transitionDelay,
          transitionDuration,
          transitionProperty,
          transitionTimingFunction,
          userSelect,
          visibility,
          verticalAlign,
          width,
          whiteSpace,
          wordBreak,
          wordSpacing,
          wordWrap,
          writingMode,
          zIndex,
     }) {
          const _all = All.checkProperty(all, "initial");

          const _alignContent = AlignContent.checkProperty(alignContent, _all);

          const _alignItems = AlignItems.checkProperty(alignItems, _all);

          const _alignSelf = AlignSelf.checkProperty(alignSelf, _all);

          const _backfaceVisibility = BackfaceVisibility.checkProperty(backfaceVisibility, _all);

          const _background = background ? background : {};

          const _backgroundBlendMode = BackgroundBlendMode.checkProperty(
               backgroundBlendMode,
               _background.imageBlendMode,
               _all
          );

          const _backgroundClip = BackgroundClip.checkProperty(
               backgroundClip,
               _background.imageClip,
               _all
          );

          const _backgroundColor = BackgroundColor.checkProperty(
               backgroundColor,
               _background.color,
               _all
          );

          const _backgroundImage = backgroundImage ? backgroundImage : _background.image;

          const _backgroundOrigin = BackgroundOrigin.checkProperty(
               backgroundOrigin,
               _background.imageOrigin,
               _all
          );

          const _backgroundPosition = BackgroundPosition.checkProperty(
               backgroundPosition,
               _background.imagePosition,
               _all
          );

          const _backgroundRepeat = BackgroundRepeat.checkProperty(
               backgroundRepeat,
               _background.imageRepeat,
               _all
          );

          const _backgroundSize = BackgroundSize.checkProperty(
               backgroundSize,
               _background.imageSize,
               _all
          );

          const _backgroundAttachment = BackgroundAttachement.checkProperty(
               backgroundAttachement,
               _background.attachment,
               _all
          );

          // BORDER SETTINGS
          const _border = border ? border : Border.newAllComplex({});

          if (borderStyle) {
               _border.topStyle = borderStyle;
               _border.bottomStyle = borderStyle;
               _border.rightStyle = borderStyle;
               _border.leftStyle = borderStyle;
          }

          if (borderWidth) {
               _border.topWidth = borderWidth;
               _border.bottomWidth = borderWidth;
               _border.rightWidth = borderWidth;
               _border.leftWidth = borderWidth;
          }

          if (borderColor) {
               _border.topColor = borderColor;
               _border.bottomColor = borderColor;
               _border.rightColor = borderColor;
               _border.leftColor = borderColor;
          }

          if (borderTop) {
               const _top = borderTop;
               _border.topStyle = _top.style;
               _border.topWidth = _top.width;
               _border.topColor = _top.color;
          }

          if (borderBottom) {
               const _bottom = borderBottom;
               _border.bottomStyle = _bottom.style;
               _border.bottomWidth = _bottom.width;
               _border.bottomColor = _bottom.color;
          }

          if (borderRight) {
               const _right = borderRight;
               _border.rightStyle = _right.style;
               _border.rightWidth = _right.width;
               _border.rightColor = _right.color;
          }

          if (borderLeft) {
               const _left = borderLeft;
               _border.leftStyle = _left.style;
               _border.leftWidth = _left.width;
               _border.leftColor = _left.color;
          }

          const _borderBottomStyle = BorderStyle.checkProperty(
               borderBottomStyle,
               _border.bottomStyle,
               _all
          );
          const _borderLeftStyle = BorderStyle.checkProperty(
               borderLeftStyle,
               _border.leftStyle,
               _all
          );
          const _borderRightStyle = BorderStyle.checkProperty(
               borderRightStyle,
               _border.rightStyle,
               _all
          );
          const _borderTopStyle = BorderStyle.checkProperty(borderTopStyle, _border.topStyle, _all);

          const _borderBottomWidth = BorderWidth.checkProperty(
               borderBottomWidth,
               _border.bottomWidth,
               _all
          );
          const _borderTopWidth = BorderWidth.checkProperty(borderTopWidth, _border.topWidth, _all);
          const _borderRightWidth = BorderWidth.checkProperty(
               borderRightWidth,
               _border.rightWidth,
               _all
          );
          const _borderLeftWidth = BorderWidth.checkProperty(
               borderLeftWidth,
               _border.leftWidth,
               _all
          );

          const _borderBottomColor = Colors.validateColor(
               borderBottomColor,
               _border.bottomColor,
               _all
          );

          const _borderTopColor = Colors.validateColor(borderTopColor, _border.topColor, _all);

          const _borderLeftColor = Colors.validateColor(borderLeftColor, _border.leftColor, _all);
          const _borderRightColor = Colors.validateColor(
               borderRightColor,
               _border.rightColor,
               _all
          );

          // BORDER RADIUS
          const _borderRadius = borderRadius
               ? borderRadius
               : {
                      topRight: BorderRadius.Initial,
                      topLeft: BorderRadius.Initial,
                      bottomRight: BorderRadius.Initial,
                      bottomLeft: BorderRadius.Initial,
                 };

          const _borderTopRightRadius = BorderRadius.checkProperty(
               borderTopRightRadius,
               _borderRadius.topRight,
               _all
          );

          const _borderTopLeftRadius = BorderRadius.checkProperty(
               borderTopLeftRadius,
               _borderRadius.topLeft,
               _all
          );

          const _borderBottomRightRadius = BorderRadius.checkProperty(
               borderBottomRightRadius,
               _borderRadius.bottomRight,
               _all
          );

          const _borderBottomLeftRadius = BorderRadius.checkProperty(
               borderBottomLeftRadius,
               _borderRadius.bottomLeft,
               _all
          );

          // BORDER IMAGE

          const _borderImage = borderImage ? borderImage : {};

          const _borderImageOutset = BorderImageOutset.checkProperty(
               borderImageOutset,
               _borderImage.outset,
               _all
          );
          const _borderImageRepeat = BorderImageRepeat.checkProperty(
               borderImageRepeat,
               _borderImage.repeat,
               _all
          );
          const _borderImageSlice = BorderImageSlice.checkProperty(
               borderImageSlice,
               _borderImage.slice,
               _all
          );

          const _borderImageSource = borderImageSource
               ? borderImageSource
               : _borderImage.url
               ? BorderImageSource.url(_borderImage.url)
               : "none";

          const _borderImageWidth = BorderImageWidth.checkProperty(
               borderImageWidth,
               _borderImage.width,
               _all
          );

          const _boxDecorationBreak = BoxDecorationBreak.checkProperty(boxDecorationBreak, _all);

          const _boxShadow = boxShadow ? boxShadow : _all;

          const _boxSizing = BoxSizing.checkProperty(boxSizing, _all);

          const _borderCollapse = BorderCollapse.checkProperty(borderCollapse, _all);

          const _breakAfter = BreakAfter.checkProperty(breakAfter, _all);

          const _breakInside = BreakInside.checkProperty(breakInside, _all);

          const _breakBefore = BreakBefore.checkProperty(breakBefore, _all);

          const _borderSpacing = BorderSpacing.checkProperty(borderSpacing, _all);

          const _columnFill = ColumnFill.checkProperty(columnFill, _all);

          const _font = font ? font : {};
          const _fontSize = FontSize.checkProperty(fontSize, _font.size, _all);
          const _fontFamily = fontFamily ? fontFamily : _font.family ? _font.family : "initial";
          const _fontStyle = FontStyle.checkProperty(fontStyle, _font.style, _all);
          const _fontWeight = FontWeight.checkProperty(fontWeight, _font.weight, _all);
          const _fontStretch = FontStretch.checkProperty(fontStretch, all);
          const _fontKerning = FontKerning.checkProperty(fontKerning, _all);
          const _fontVariant = FontVariant.checkProperty(fontVariant, _all);
          const _fontVariantCaps = FontVariantCaps.checkProperty(fontVariantCaps, _all);
          const _color = Colors.validateFontColor(textColor, _font.color, _all);

          const _height = Height.checkProperty(height, _all);
          const _maxHeight = Height.checkProperty(maxHeight, _all);
          const _minHeight = Height.checkProperty(minHeight, _all);

          const _width = Height.checkProperty(width, _all);
          const _maxWidth = Height.checkProperty(maxWidth, _all);
          const _minWidth = Height.checkProperty(minWidth, _all);

          const _position = Position.checkProperty(position, _all);
          const _bottom = Side.checkProperty(bottom, _all);
          const _top = Side.checkProperty(top, _all);
          const _right = Side.checkProperty(right, _all);
          const _left = Side.checkProperty(left, _all);

          const _padding = Length.isValidInput(padding)
               ? Length.inputToJSON(padding)
               : padding
               ? padding
               : {};

          if (Length.isValidInput(paddingVertical)) {
               _padding.top = paddingVertical;
               _padding.bottom = paddingVertical;
          }

          if (Length.isValidInput(paddingHorizontal)) {
               _padding.right = paddingHorizontal;
               _padding.left = paddingHorizontal;
          }

          const _paddingTop = Padding.checkSingleProperty(paddingTop, _padding.top, _all);
          const _paddingRight = Padding.checkSingleProperty(paddingRight, _padding.right, _all);
          const _paddingBottom = Padding.checkSingleProperty(paddingBottom, _padding.bottom, _all);
          const _paddingLeft = Padding.checkSingleProperty(paddingLeft, _padding.left, _all);

          const _margin = Length.isValidInput(margin)
               ? Length.inputToJSON(margin)
               : margin
               ? margin
               : {};

          if (Length.isValidInput(marginVertical)) {
               _margin.top = marginVertical;
               _margin.bottom = marginVertical;
          }

          if (Length.isValidInput(marginHorizontal)) {
               _margin.right = marginHorizontal;
               _margin.left = marginHorizontal;
          }

          const _marginTop = Margin.checkSingleProperty(marginTop, _margin.top, _all);
          const _marginRight = Margin.checkSingleProperty(marginRight, _margin.right, _all);
          const _marginBottom = Margin.checkSingleProperty(marginBottom, _margin.bottom, _all);
          const _marginLeft = Margin.checkSingleProperty(marginLeft, _margin.left, _all);

          const _opacity = Opacity.checkProperty(opacity, all);

          const _justifyContent = JustifyContent.checkProperty(justifyContent, _all);

          const _display = Display.checkProperty(display, _all);

          const _flexFlow = flexFlow ? flexFlow : {};
          const _flexDirection = FlexDirection.checkProperty(
               flexDirection,
               _flexFlow.direction,
               _all
          );
          const _flexWrap = FlexWrap.checkProperty(flexWrap, _flexFlow.wrap, _all);

          const _flex = flex ? flex : {};
          const _flexBasis = FlexBasis.checkProperty(flexBasis, _flex.basis, _all);
          const _flexGrow = FlexGrow.checkProperty(flexGrow, _flex.grow, _all);
          const _flexShrink = FlexShrink.checkProperty(flexShrink, _flex.shrink, _all);

          const _textAlign = TextAlign.checkProperty(textAlign, _all);
          const _textAlignLast = TextAlignLast.checkProperty(textAlignLast, _all);
          const _textJustify = TextJustify.checkProperty(textJustify, _all);
          const _textDecoration = textDecoration ? textDecoration : {};
          const _textDecorationColor = Colors.validateColor(
               textDecorationColor,
               _textDecoration.color,
               _all
          );
          const _textDecorationStyle = TextDecorationStyle.checkProperty(
               textDecorationColor,
               _textDecoration.style,
               _all
          );
          const _textDecorationLine = TextDecorationLine.checkProperty(
               textDecorationLine,
               _textDecoration.line,
               _all
          );

          const _grid = grid ? grid : {};
          const _gridGap = gridGap ? gridGap : {};
          const _gap = gap ? gap : _gridGap;
          const _gridRowGap = gridRowGap ? gridRowGap : _gap.row;
          const _gridColumnGap = gridColumnGap ? gridColumnGap : _gap.column;
          const _rowGap = RowGap.checkProperty(rowGap, _gridRowGap, _all);
          const _columnGap = ColumnGap.checkProperty(gridColumnGap, _gridColumnGap, _all);

          const _gridAutoRows = GridAutoRows.checkProperty(gridAutoRow, _grid.autoRows, _all);
          const _gridAutoColumns = GridAutoColumns.checkProperty(
               gridAutoColumn,
               _grid.autoColumns,
               _all
          );
          const _gridAutoFlow = GridAutoFlow.checkProperty(gridAutoFlow, _grid.autoFlow, _all);

          const _gridArea = gridArea ? gridArea : {};

          const _gridRow = gridRow ? gridRow : GridRow.new(_gridArea.rowStart, _gridArea.rowEnd);
          const _gridColumn = gridColumn
               ? gridColumn
               : GridColumn.new(_gridArea.columnStart, _gridArea.columnEnd);
          const _gridColumnStart = GridColumnStart.checkProperty(
               gridColumnStart,
               _gridColumn.start,
               _all
          );
          const _gridColumnEnd = GridColumnEnd.checkProperty(gridColumnEnd, _gridColumn.end, _all);
          const _gridRowStart = GridRowStart.checkProperty(gridRowStart, _gridRow.start, _all);
          const _gridRowEnd = GridRowEnd.checkProperty(gridRowEnd, _gridRow.end, _all);

          const _gridTemplate = gridTemplate
               ? gridTemplate
               : grid
               ? GridTemplate.new(_grid.templateRows, _grid.templateColumns)
               : {};
          const _gridTemplateColumns = GridTemplateColumn.checkProperty(
               gridTemplateColumns,
               _gridTemplate.columns,
               _all
          );
          const _gridTemplateRows = GridTemplateRow.checkProperty(
               gridTemplateRows,
               _gridTemplate.rows,
               _all
          );
          const _gridTemplateAreas = gridTemplateAreas ? gridTemplateAreas : _grid.templateAreas;

          const _captionSide = CaptionSide.checkProperty(captionSide, _all);

          const _caretColor = Colors.validateColor(caretColor, _all, "black");

          const _clear = Clear.checkProperty(clear, _all);

          const _direction = Direction.checkProperty(direction, _all);

          const _emptyCells = EmptyCells.checkProperty(emptyCells, _all);

          const _float = Float.checkProperty(float, _all);

          const _hangingPunctuation = HangingPunctuation.checkProperty(hangingPunctuation, _all);

          const _hyphens = Hyphens.checProperty(hyphens, _all);

          const _isolation = Isolation.checkProperty(isolation, _all);

          const _letterSpacing = LetterSpacing.checkProperty(letterSpacing, _all);

          const _lineHeight = LineHeight.checkProperty(lineHeight, _all);

          const _listStyle = listStyle ? listStyle : {};
          const _listStyleImage = listStyleImage ? listStyleImage : _listStyle.image;
          const _listStylePosition = ListStylePosition.checkProperty(
               listStylePosition,
               _listStyle.position
          );
          const _listStyleType = ListStyleType.checkProperty(listStyleType, _listStyle.type);

          const _mixBlendMode = MixBlendMode.checkProperty(mixBlendMode, _all);

          const _objectFit = ObjectFit.checkProperty(objectFit, _all);
          const _objectPosition = ObjectPosition.checkProperty(objectPosition, _all);

          const _order = Order.checkProperty(order, _all);

          const _outline = outline ? outline : {};
          const _outlineOffset = OutlineOffset.checkProperty(outlineOffset, _outline.offset, _all);
          const _outlineColor = Colors.validateColor(outlineColor, _outline.color, _all);
          const _outlineStyle = OutlineStyle.checkProperty(outlineStyle, _outline.style, _all);
          const _outlineWidth = OutlineWidth.checkProperty(outlineWidth, _outline.width, _all);

          const _overflow = Overflow.checkProperty(overflow, _all);
          const _overflowX = OverflowX.checkProperty(overflowX, _all);
          const _overflowY = OverflowY.checkProperty(overflowY, _all);

          const _textOverflow = textOverflow ? textOverflow : _all;

          const _textIndent = TextIndent.checkProperty(textIndent, _all);
          const _tabSize = TabSize.checkProperty(tabSize, _all);
          const _textShadow = textShadow ? textShadow : "";
          const _textTransform = TextTransform.checkProperty(textTransform, _all);

          const _verticalAlign = VerticalAlign.checkProperty(verticalAlign, _all);

          const _scrollBehavior = ScrollBehavior.checkProperty(scrollBehavior, _all);

          const _visibility = Visibility.checkProperty(visibility, _all);

          const _wordBreak = WordBreak.checkProperty(wordBreak, _all);
          const _wordSpacing = WordSpacing.checkProperty(wordSpacing, _all);
          const _writingMode = WritingMode.checkProperty(writingMode, _all);

          const _zIndex = ZIndex.checkProperty(zIndex, _all);

          const _userSelect = UserSelect.checkProperty(userSelect, _all);

          const _whiteSpace = WhiteSpace.checkProperty(whiteSpace, _all);

          const _pageBreakInside = PageBreakInside.checkProperty(pageBreakInside, _all);
          const _pageBreakBefore = PageBreakBefore.checkProperty(pageBreakBefore, _all);
          const _pageBreakAfter = PageBreakAfter.checkProperty(pageBreakAfter, _all);

          const _perspective = Perspective.checkProperty(perspective, _all);

          const _columnRule = columnRule ? columnRule : {};

          const _columnRuleColor = Colors.validateColor(columnRuleColor, _columnRule.color, _all);
          const _columnRuleStyle = ColumnRuleStyle.checkProperty(
               columnRuleStyle,
               _columnRule.style,
               _all
          );
          const _columnRuleWidth = Height.checkProperty(columnRuleWidth, _columnRule.width, _all);

          const _columns = columns ? columns : {};
          const _columnWidth = Height.checkProperty(columnWidth, _columns.width, _all);
          const _columnCount = ColumnCount.checkProperty(columnCount, _columns.count, _all);

          const _columnSpan = ColumnSpan.checkProperty(columnSpan, _all);

          const _cursor = Cursor.checkProperty(cursor, _all);

          const _transform = transform ? transform : Transform.None;

          const _transformOrigin = TransformOrigin.checkProperty(transformOrigin, _all);

          const _transformStyle = TransformStyle.checkProperty(transformStyle, _all);

          const _animation = animation ? animation : {};

          const _animationDelay = AnimationDelay.checkProperty(
               animationDelay,
               _animation.delay,
               _all
          );

          const _animationDirection = AnimationDirection.checkProperty(
               animationDirection,
               _animation.direction,
               _all
          );

          const _animationDuration = AnimationDuration.checkProperty(
               animationDuration,
               _animation.duration,
               _all
          );

          const _animationFillMode = AnimationFillMode.checkProperty(
               animationFillMode,
               _animation.fillMode,
               _all
          );

          const _animationIterationCount = AnimationIterationCount.checkProperty(
               animationIterationCount,
               _animation.iterationCount,
               _all
          );

          const _animationName = animationName
               ? animationName
               : _animation.name
               ? _animation.name
               : _all;

          const _animationPlayState = AnimationPlayState.checkProperty(
               animationPlayState,
               _animation.playState,
               _all
          );

          const _animationTimingFunction = AnimationTimingFunction.checkProperty(
               animationTimingFunction,
               _animation.timingFunction,
               _all
          );

          const _clip = Clip.checkProperty(clip, _all);

          const _content = content ? content : _all;

          const _filter = filter ? filter : _all;

          const _transition = transition ? transition : {};

          const _transitionProperty = transitionProperty
               ? transitionProperty
               : _transition.property
               ? _transition.property
               : "";

          const _transitionDelay = TransitionDelay.checkProperty(
               transitionDelay,
               _transition.delay,
               _all
          );

          const _transitionDuration = TransitionDuration.checkProperty(
               transitionDuration,
               _transition.duration,
               _all
          );

          const _transitionTimingFunction = TransitionTimingFunction.checkProperty(
               transitionTimingFunction,
               _transition.timingFunction
          );

          // CSS -------------------------------------------------------------------------------------------------------------------------
          // CSS -------------------------------------------------------------------------------------------------------------------------

          const selectorContent = `
          ${backgroundColor && `background-color: ${_backgroundColor}`};
          ${textColor && `color: ${_color} `};
          ${alignContent && `align-content: ${_alignContent}`};
          ${alignItems && `align-items: ${_alignItems}`};
          ${alignSelf && `align-self: ${_alignSelf}`};
          ${
               backfaceVisibility &&
               `backface-visibility: ${_backfaceVisibility};
               -webkit-backface-visibility: ${_backfaceVisibility};`
          }
          ${
               (backgroundAttachement || background) &&
               `background-attachment: ${_backgroundAttachment};`
          }
          ${
               (backgroundBlendMode || background) &&
               `background-blend-mode: ${_backgroundBlendMode};`
          }
          ${(backgroundClip || background) && `background-clip: ${_backgroundClip}`};
          ${(backgroundImage || background) && `background-image: ${_backgroundImage};`};
          ${(backgroundOrigin || background) && `background-origin: ${_backgroundOrigin}`};
          ${(backgroundPosition || background) && `background-position: ${_backgroundPosition}`};
          ${(backgroundRepeat || background) && `background-repeat: ${_backgroundRepeat}`};
          ${(backgroundSize || background) && `background-size: ${_backgroundSize};`};
          ${borderCollapse && `border-collapse: ${_borderCollapse};`};
          ${borderSpacing && `border-spacing: ${_borderSpacing};`};
          ${
               (borderTopStyle || border || borderTop || borderStyle) &&
               `border-top-style: ${_borderTopStyle};`
          };
          ${
               (borderTopWidth || border || borderTop || borderWidth) &&
               `border-top-width: ${_borderTopWidth};`
          };
          ${
               (borderTopColor || border || borderTop || borderColor) &&
               `border-top-color: ${_borderTopColor};`
          };
          ${
               (borderRightStyle || border || borderRight || borderStyle) &&
               `border-right-style: ${_borderRightStyle};`
          } ;   
          ${
               (borderRightWidth || border || borderRight || borderWidth) &&
               `border-right-width: ${_borderRightWidth};`
          };
          ${
               (borderRightColor || border || borderRight || borderColor) &&
               `border-right-color: ${_borderRightColor};`
          } ;
          ${
               (borderBottomStyle || border || borderBottom || borderStyle) &&
               `border-bottom-style: ${_borderBottomStyle};`
          };
          ${
               (borderBottomWidth || border || borderBottom || borderWidth) &&
               `border-bottom-width: ${_borderBottomWidth};`
          };
          ${
               (borderBottomColor || border || borderBottom || borderColor) &&
               `border-bottom-color: ${_borderBottomColor};`
          };
          ${
               (borderLeftStyle || border || borderLeft || borderStyle) &&
               `border-left-style: ${_borderLeftStyle};`
          };
          ${
               (borderLeftWidth || border || borderLeft || borderWidth) &&
               `border-left-width: ${_borderLeftWidth};`
          };
          ${
               (borderLeftColor || border || borderLeft || borderColor) &&
               `border-left-color: ${_borderLeftColor};`
          };
          ${
               (borderTopRightRadius || borderRadius) &&
               `border-top-right-radius: ${_borderTopRightRadius};`
          };
          ${
               (borderBottomRightRadius || borderRadius) &&
               `border-bottom-right-radius: ${_borderBottomRightRadius};`
          };
          ${
               (borderBottomLeftRadius || borderRadius) &&
               `border-bottom-left-radius: ${_borderBottomLeftRadius};`
          };
          ${
               (borderTopLeftRadius || borderRadius) &&
               `border-top-left-radius: ${_borderTopLeftRadius};`
          };
          ${borderImageOutset && `border-image-outset: ${_borderImageOutset};`};
          ${borderImageRepeat && `border-image-repeat: ${_borderImageRepeat};`};
          ${borderImageSlice && `border-image-slice: ${_borderImageSlice};`};
          ${borderImageWidth && `border-image-width: ${_borderImageWidth};`};
          ${borderImageSource && `border-image-source: ${_borderImageSource};`};
          ${
               boxDecorationBreak &&
               `-webkit-box-decoration-break: ${_boxDecorationBreak};
               -o-box-decoration-break: ${_boxDecorationBreak};
               box-decoration-break: ${_boxDecorationBreak};`
          };
          ${boxShadow && `box-shadow: ${_boxShadow};`};
          ${boxSizing && `box-sizing: ${_boxSizing};`};
          ${breakAfter && `break-after: ${_breakAfter};`};
          ${breakInside && `break-inside: ${_breakInside};`};
          ${breakBefore && `break-before: ${_breakBefore} ;`};
          ${columnCount && `column-count: ${_columnCount};`};
          ${columnFill && `column-fill: ${_columnFill};`};
          ${columnRuleStyle && `column-rule-style: ${_columnRuleStyle};`};
          ${columnRuleColor && `column-rule-color: ${_columnRuleColor};`};
          ${columnRuleWidth && `column-rule-width: ${_columnRuleWidth};`};
          ${columnSpan && `column-span: ${_columnSpan};`};
          ${columnWidth && `column-width: ${_columnWidth};`};
          ${cursor && `cursor: ${_cursor};`};
          ${fontSize && `font-size: ${_fontSize};`};
          ${fontFamily && `font-family: ${_fontFamily};`};
          ${fontStyle && `font-style: ${_fontStyle};`};
          ${fontWeight && `font-weight: ${_fontWeight};`};
          ${fontStretch && `font-stretch: ${_fontStretch};`};
          ${textAlign && `text-align: ${_textAlign};`};
          ${textAlignLast && `text-align-last: ${_textAlignLast};`};
          ${textJustify && `text-justify: ${_textJustify};`};
          ${textDecorationColor && `text-decoration-color: ${_textDecorationColor};`};
          ${textDecorationLine && `text-decoration-line: ${_textDecorationLine};`};
          ${textDecorationStyle && `text-decoration-style: ${_textDecorationStyle};`};
          ${display && `display: ${_display};`};
          ${flexDirection && `flex-direction: ${_flexDirection};`};
          ${flexBasis && `flex-basis: ${_flexBasis};`};
          ${flexWrap && `flex-wrap: ${_flexWrap};`};
          ${flexGrow && `flex-grow: ${_flexGrow};`};
          ${flexShrink && `flex-shrink: ${_flexShrink};`};
          ${gridColumnGap && `grid-column-gap: ${_gridColumnGap};`};
          ${gridColumnGap && `column-gap: ${_columnGap};`};
          ${gridRowGap && `grid-row-gap: ${_gridRowGap};`};
          ${rowGap && `row-gap: ${_rowGap};`};
          ${gridAutoColumn && `grid-auto-columns: ${_gridAutoColumns};`};
          ${gridAutoRow && `grid-auto-rows: ${_gridAutoRows};`};
          ${gridAutoFlow && `grid-auto-flow: ${_gridAutoFlow};`};
          ${gridTemplateAreas && `grid-template-areas: ${_gridTemplateAreas};`};
          ${gridRowStart && `grid-row-start: ${_gridRowStart};`};
          ${gridRowEnd && `grid-row-end: ${_gridRowEnd};`};
          ${gridColumnStart && `grid-column-start: ${_gridColumnStart};`};
          ${gridColumnEnd && `grid-column-end: ${_gridColumnEnd};`};
          ${gridTemplateRows && `grid-template-rows: ${_gridTemplateRows};`};
          ${gridTemplateColumns && `grid-template-columns: ${_gridTemplateColumns};`};
          ${width && `width: ${_width};`};
          ${maxWidth && `max-width: ${_maxWidth};`};
          ${minWidth && `min-width: ${_minWidth};`};
          ${height && `height: ${_height};`};
          ${maxHeight && `max-height: ${_maxHeight};`};
          ${minHeight && `min-height: ${_minHeight};`};
          ${top && `top: ${_top};`};
          ${right && `right: ${_right};`};
          ${bottom && `bottom: ${_bottom};`};
          ${left && `left: ${_left};`};
          ${
               position &&
               `position: -webkit ${_position};
          position: ${_position};`
          };
          ${(paddingTop || paddingVertical || padding) && `padding-top: ${_paddingTop};`};
          ${(paddingBottom || paddingVertical || padding) && `padding-bottom: ${_paddingBottom};`};
          ${(paddingRight || paddingHorizontal || padding) && `padding-right: ${_paddingRight};`};
          ${(paddingLeft || paddingHorizontal || padding) && `padding-left: ${_paddingLeft};`};

          ${(marginTop || marginVertical || margin) && `margin-top: ${_marginTop};`};
          ${(marginBottom || marginVertical || margin) && `margin-bottom: ${_marginBottom};`};
          ${(marginRight || marginHorizontal || margin) && `margin-right: ${_marginRight};`};
          ${(marginLeft || marginHorizontal || margin) && `margin-left: ${_marginLeft};`};
          ${opacity && `opacity: ${_opacity};`};
          ${justifyContent && `justify-content: ${_justifyContent};`};
          ${captionSide && `caption-side: ${_captionSide};`};
          ${caretColor && `caret-color: ${_caretColor};`};
          ${clear && `clear: ${_clear};`};
          ${direction && `direction: ${_direction};`};
          ${emptyCells && `empty-cells: ${_emptyCells};`};
          ${fontKerning && `font-kerning: ${_fontKerning};`};
          ${fontVariant && `font-variant: ${_fontVariant};`};
          ${fontVariantCaps && `font-variant-caps: ${_fontVariantCaps};`};
          ${hangingPunctuation && `hanging-punctuation: ${_hangingPunctuation};`};
          ${
               hyphens &&
               `-webkit-hyphens: ${_hyphens};
               -ms-hyphens: ${_hyphens};
               hyphens: ${_hyphens};`
          };
          ${isolation && `isolation: ${_isolation};`};
          ${letterSpacing && `letter-spacing: ${_letterSpacing};`};
          ${lineHeight && `line-height: ${_lineHeight};`};
          ${listStyleImage && `list-style-image: ${_listStyleImage};`};
          ${listStylePosition && `list-style-position: ${_listStylePosition};`};
          ${listStyleType && `list-style-type: ${_listStyleType};`};
          ${mixBlendMode && `mix-blend-mode: ${_mixBlendMode};`};
          ${objectFit && `object-fit: ${_objectFit};`};
          ${objectPosition && `object-position: ${_objectPosition};`};
          ${order && `order: ${_order};`};
          ${outlineColor && `outline-color: ${_outlineColor};`};
          ${outlineOffset && `outline-offset: ${_outlineOffset};`} ;
          ${outlineStyle && `outline-style: ${_outlineStyle};`};
          ${outlineWidth && `outline-width: ${_outlineWidth};`};
          ${overflow && `overflow: ${_overflow};`};
          ${overflowX && `overflow-x: ${_overflowX};`};
          ${overflowY && `overflow-y: ${_overflowY};`};
          ${textOverflow && `text-overflow: ${_textOverflow};`};
          ${textIndent && `text-indent: ${_textIndent};`};
          ${pageBreakInside && `page-break-inside: ${_pageBreakInside};`};
          ${pageBreakAfter && `page-break-after: ${_pageBreakAfter};`};
          ${pageBreakBefore && `page-break-before: ${_pageBreakBefore};`};
          ${perspective && `perspective: ${_perspective};`};
          ${
               tabSize &&
               `-moz-tab-size: ${_tabSize};
               tab-size: ${_tabSize};`
          };
          ${float && `float:${_float};`};
          ${textShadow && `text-shadow: ${_textShadow};`};
          ${textTransform && `text-transform: ${_textTransform};`};
          ${transform && `transform: ${_transform};`};
          ${transformOrigin && `transform-origin: ${_transformOrigin};`};
          ${transformStyle && `transform-style: ${_transformStyle};`};
          ${verticalAlign && `vertical-align: ${_verticalAlign};`};
          ${scrollBehavior && `scroll-behavior: ${_scrollBehavior};`};
          ${visibility && `visibility: ${_visibility};`};
          ${userSelect && `user-select: ${_userSelect};`};
          ${whiteSpace && `white-space: ${_whiteSpace};`};
          ${wordBreak && `word-break: ${_wordBreak};`};
          ${wordSpacing && `word-spacing: ${_wordSpacing};`};
          ${writingMode && `writing-mode: ${_writingMode};`};
          ${zIndex && `z-index: ${_zIndex};`}
          ${(animationDelay || animation) && `animation-delay:${_animationDelay};`};
          ${(animationDirection || animation) && `animation-direction:${_animationDirection};`};
          ${(animationDuration || animation) && `animation-duration:${_animationDuration};`};
          ${(animationFillMode || animation) && `animation-fill-mode:${_animationFillMode};`};
          ${
               (animationIterationCount || animation) &&
               `animation-iteration-count:${_animationIterationCount};`
          };
          ${(animationName || animation) && `animation-name:${_animationName};`};
          ${(animationPlayState || animation) && `animation-play-state:${_animationPlayState};`};
          ${
               (animationTimingFunction || animation) &&
               `animation-timing-function:${_animationTimingFunction};`
          };
          ${clip && `clip:${_clip};`};
          ${content && `content:${_content};`};
          ${filter && `filter:${_filter};`};
          ${(transitionProperty || transition) && `transition-property:${_transitionProperty};`};
          ${(transitionDelay || transition) && `transition-delay:${_transitionDelay};`};
          ${(transitionDuration || transition) && `transition-duration:${_transitionDuration};`};
          ${
               (transitionTimingFunction || transition) &&
               `transition-timing-function:${_transitionTimingFunction};`
          };
          `;

          // const output = `${selectorContent}`
          //     .split("undefined")
          //     .filter((e) => /\n/gm.test(e.trim()));

          // console.log(output);

          return selectorContent;
     }

     static _new(props) {
          const all = All.checkProperty(props.all, "initial");

          const alignContent = AlignContent.checkProperty(props.alignContent, all);

          const alignItems = AlignItems.checkProperty(props.alignItems, all);

          const alignSelf = AlignSelf.checkProperty(props.alignSelf, all);

          const backfaceVisibility = BackfaceVisibility.checkProperty(
               props.backfaceVisibility,
               all
          );

          const background = props.background ? props.background : {};

          const backgroundBlendMode = BackgroundBlendMode.checkProperty(
               props.backgroundBlendMode,
               background.imageBlendMode,
               all
          );

          const backgroundClip = BackgroundClip.checkProperty(
               props.backgroundClip,
               background.imageClip,
               all
          );

          const backgroundColor = BackgroundColor.checkProperty(
               props.backgroundColor,
               background.color,
               all
          );

          const backgroundImage = props.backgroundImage ? props.backgroundImage : background.image;

          const backgroundOrigin = BackgroundOrigin.checkProperty(
               props.backgroundOrigin,
               background.imageOrigin,
               all
          );

          const backgroundPosition = BackgroundPosition.checkProperty(
               props.backgroundPosition,
               background.imagePosition,
               all
          );

          const backgroundRepeat = BackgroundRepeat.checkProperty(
               props.backgroundRepeat,
               background.imageRepeat,
               all
          );

          const backgroundSize = BackgroundSize.checkProperty(
               props.backgroundSize,
               background.imageSize,
               all
          );

          const backgroundAttachment = BackgroundAttachement.checkProperty(
               props.backgroundAttachment,
               background.attachment,
               all
          );

          // BORDER SETTINGS
          const border = props.border ? props.border : Border.newAllComplex({});

          if (props.borderStyle) {
               border.topStyle = props.borderStyle;
               border.bottomStyle = props.borderStyle;
               border.rightStyle = props.borderStyle;
               border.leftStyle = props.borderStyle;
          }

          if (props.borderWidth) {
               border.topWidth = props.borderWidth;
               border.bottomWidth = props.borderWidth;
               border.rightWidth = props.borderWidth;
               border.leftWidth = props.borderWidth;
          }

          if (props.borderColor) {
               border.topColor = props.borderColor;
               border.bottomColor = props.borderColor;
               border.rightColor = props.borderColor;
               border.leftColor = props.borderColor;
          }

          if (props.borderTop) {
               const top = props.borderTop;
               border.topStyle = top.style;
               border.topWidth = top.width;
               border.topColor = top.color;
          }

          if (props.borderBottom) {
               const bottom = props.borderBottom;
               border.bottomStyle = bottom.style;
               border.bottomWidth = bottom.width;
               border.bottomColor = bottom.color;
          }

          if (props.borderRight) {
               const right = props.borderRight;
               border.rightStyle = right.style;
               border.rightWidth = right.width;
               border.rightColor = right.color;
          }

          if (props.borderLeft) {
               const left = props.borderLeft;
               border.leftStyle = left.style;
               border.leftWidth = left.width;
               border.leftColor = left.color;
          }

          const borderBottomStyle = BorderStyle.checkProperty(
               props.borderBottomStyle,
               border.bottomStyle,
               all
          );
          const borderLeftStyle = BorderStyle.checkProperty(
               props.borderLeftStyle,
               border.leftStyle,
               all
          );
          const borderRightStyle = BorderStyle.checkProperty(
               props.borderRightStyle,
               border.rightStyle,
               all
          );
          const borderTopStyle = BorderStyle.checkProperty(
               props.borderTopStyle,
               border.topStyle,
               all
          );

          const borderBottomWidth = BorderWidth.checkProperty(
               props.borderBottomWidth,
               border.bottomWidth,
               all
          );
          const borderTopWidth = BorderWidth.checkProperty(
               props.borderTopWidth,
               border.topWidth,
               all
          );
          const borderRightWidth = BorderWidth.checkProperty(
               props.borderRightWidth,
               border.rightWidth,
               all
          );
          const borderLeftWidth = BorderWidth.checkProperty(
               props.borderLeftWidth,
               border.leftWidth,
               all
          );

          const borderBottomColor = Colors.validateColor(
               props.borderBottomColor,
               border.bottomColor,
               all
          );

          const borderTopColor = Colors.validateColor(props.borderTopColor, border.topColor, all);

          const borderLeftColor = Colors.validateColor(
               props.borderLeftColor,
               border.leftColor,
               all
          );
          const borderRightColor = Colors.validateColor(
               props.borderRightColor,
               border.rightColor,
               all
          );

          // BORDER RADIUS
          const borderRadius = props.borderRadius
               ? props.borderRadius
               : {
                      topRight: BorderRadius.Initial,
                      topLeft: BorderRadius.Initial,
                      bottomRight: BorderRadius.Initial,
                      bottomLeft: BorderRadius.Initial,
                 };

          const borderTopRightRadius = BorderRadius.checkProperty(
               props.borderTopRightRadius,
               borderRadius.topRight,
               all
          );

          const borderTopLeftRadius = BorderRadius.checkProperty(
               props.borderTopLeftRadius,
               borderRadius.topLeft,
               all
          );

          const borderBottomRightRadius = BorderRadius.checkProperty(
               props.borderBottomRightRadius,
               borderRadius.bottomRight,
               all
          );

          const borderBottomLeftRadius = BorderRadius.checkProperty(
               props.borderBottomLeftRadius,
               borderRadius.bottomLeft,
               all
          );

          // BORDER IMAGE

          const borderImage = props.borderImage ? props.borderImage : {};

          const borderImageOutset = BorderImageOutset.checkProperty(
               props.borderImageOutset,
               borderImage.outset,
               all
          );
          const borderImageRepeat = BorderImageRepeat.checkProperty(
               props.borderImageRepeat,
               borderImage.repeat,
               all
          );
          const borderImageSlice = BorderImageSlice.checkProperty(
               props.borderImageSlice,
               borderImage.slice,
               all
          );

          const borderImageSource = props.borderImageSource
               ? props.borderImageSource
               : borderImage.url
               ? BorderImageSource.url(borderImage.url)
               : "none";

          const borderImageWidth = BorderImageWidth.checkProperty(
               props.borderImageWidth,
               borderImage.width,
               all
          );

          const boxDecorationBreak = BoxDecorationBreak.checkProperty(
               props.boxDecorationBreak,
               all
          );

          const boxShadow = props.boxShadow ? props.boxShadow : all;

          const boxSizing = BoxSizing.checkProperty(props.boxSizing, all);

          const borderCollapse = BorderCollapse.checkProperty(props.borderCollapse, all);

          const breakAfter = BreakAfter.checkProperty(props.breakAfter, all);

          const breakInside = BreakInside.checkProperty(props.breakInside, all);

          const breakBefore = BreakBefore.checkProperty(props.breakBefore, all);

          const borderSpacing = BorderSpacing.checkProperty(props.borderSpacing, all);

          const columnFill = ColumnFill.checkProperty(props.columnFill, ColumnFill.Initial, all);

          const font = props.font ? props.font : {};
          const fontSize = FontSize.checkProperty(props.fontSize, font.size, all);
          const fontFamily = props.fontFamily
               ? props.fontFamily
               : font.family
               ? font.family
               : "initial";
          const fontStyle = FontStyle.checkProperty(props.fontStyle, font.style, all);
          const fontWeight = FontWeight.checkProperty(props.fontWeight, font.weight, all);
          const fontStretch = FontStretch.checkProperty(
               props.fontStretch,
               FontStretch.Initial,
               all
          );
          const fontKerning = FontKerning.checkProperty(props.fontKerning, all);
          const fontVariant = FontVariant.checkProperty(props.fontVariant, all);
          const fontVariantCaps = FontVariantCaps.checkProperty(props.fontVariantCaps, all);
          const color = Colors.validateFontColor(props.color, font.color, all);

          const height = Height.checkProperty(props.height, all);
          const maxHeight = Height.checkProperty(props.maxHeight, all);
          const minHeight = Height.checkProperty(props.minHeight, all);

          const width = Height.checkProperty(props.width, all);
          const maxWidth = Height.checkProperty(props.maxWidth, all);
          const minWidth = Height.checkProperty(props.minWidth, all);

          const position = Position.checkProperty(props.position, all);
          const bottom = Side.checkProperty(props.bottom, all);
          const top = Side.checkProperty(props.top, all);
          const right = Side.checkProperty(props.right, all);
          const left = Side.checkProperty(props.left, all);

          const padding = Length.isValidInput(props.padding)
               ? Length.inputToJSON(props.padding)
               : props.padding
               ? props.padding
               : {};

          if (Length.isValidInput(props.paddingVertical)) {
               padding.top = props.paddingVertical;
               padding.bottom = props.paddingVertical;
          }

          if (Length.isValidInput(props.paddingHorizontal)) {
               padding.right = props.paddingHorizontal;
               padding.left = props.paddingHorizontal;
          }

          const paddingTop = Padding.checkSingleProperty(props.paddingTop, padding.top, all);
          const paddingRight = Padding.checkSingleProperty(props.paddingRight, padding.right, all);
          const paddingBottom = Padding.checkSingleProperty(
               props.paddingBottom,
               padding.bottom,
               all
          );
          const paddingLeft = Padding.checkSingleProperty(props.paddingLeft, padding.left, all);

          const margin = Length.isValidInput(props.margin)
               ? Length.inputToJSON(props.margin)
               : props.margin
               ? props.margin
               : {};

          if (Length.isValidInput(props.marginVertical)) {
               margin.top = props.marginVertical;
               margin.bottom = props.marginVertical;
          }

          if (Length.isValidInput(props.marginHorizontal)) {
               margin.right = props.marginHorizontal;
               margin.left = props.marginHorizontal;
          }

          const marginTop = Margin.checkSingleProperty(props.marginTop, margin.top, all);
          const marginRight = Margin.checkSingleProperty(props.marginRight, margin.right, all);
          const marginBottom = Margin.checkSingleProperty(props.marginBottom, margin.bottom, all);
          const marginLeft = Margin.checkSingleProperty(props.marginLeft, margin.left, all);

          const opacity = Opacity.checkProperty(props.opacity, all);

          const justifyContent = JustifyContent.checkProperty(props.justifyContent, all);

          const display = Display.checkProperty(props.display, all);

          const flexFlow = props.flexFlow ? props.flexFlow : {};
          const flexDirection = FlexDirection.checkProperty(
               props.flexDirection,
               flexFlow.direction,
               all
          );
          const flexWrap = FlexWrap.checkProperty(props.flexWrap, flexFlow.wrap, all);

          const flex = props.flex ? props.flex : {};
          const flexBasis = FlexBasis.checkProperty(props.flexBasis, flex.basis, all);
          const flexGrow = FlexGrow.checkProperty(props.flexGrow, flex.grow, all);
          const flexShrink = FlexShrink.checkProperty(props.flexShrink, flex.shrink, all);

          const textAlign = TextAlign.checkProperty(props.textAlign, all);
          const textAlignLast = TextAlignLast.checkProperty(props.textAlignLast, all);
          const textJustify = TextJustify.checkProperty(props.textJustify, all);
          const textDecoration = props.textDecoration ? props.textDecoration : {};
          const textDecorationColor = Colors.validateColor(
               props.textDecorationColor,
               textDecoration.color,
               all
          );
          const textDecorationStyle = TextDecorationStyle.checkProperty(
               props.textDecorationColor,
               textDecoration.style,
               all
          );
          const textDecorationLine = TextDecorationLine.checkProperty(
               props.textDecorationLine,
               textDecoration.line,
               all
          );

          const grid = props.grid ? props.grid : {};
          const gridGap = props.gridGap ? props.gridGap : {};
          const gap = props.gap ? props.gap : gridGap;
          const gridRowGap = props.gridRowGap ? props.gridRowGap : gap.row;
          const gridColumnGap = props.gridColumnGap ? props.gridColumnGap : gap.column;
          const rowGap = RowGap.checkProperty(props.rowGap, gridRowGap, all);
          const columnGap = ColumnGap.checkProperty(props.columnGap, gridColumnGap, all);

          const gridAutoRows = GridAutoRows.checkProperty(props.gridAutoRows, grid.autoRows, all);
          const gridAutoColumns = GridAutoColumns.checkProperty(
               props.gridAutoColumns,
               grid.autoColumns,
               all
          );
          const gridAutoFlow = GridAutoFlow.checkProperty(props.gridAutoFlow, grid.autoFlow, all);

          const gridArea = props.gridArea ? props.gridArea : {};

          const gridRow = props.gridRow
               ? props.gridRow
               : GridRow.new(gridArea.rowStart, gridArea.rowEnd);
          const gridColumn = props.gridColumn
               ? props.gridColumn
               : GridColumn.new(gridArea.columnStart, gridArea.columnEnd);
          const gridColumnStart = GridColumnStart.checkProperty(
               props.gridColumnStart,
               gridColumn.start,
               all
          );
          const gridColumnEnd = GridColumnEnd.checkProperty(
               props.gridColumnEnd,
               gridColumn.end,
               all
          );
          const gridRowStart = GridRowStart.checkProperty(props.gridRowStart, gridRow.start, all);
          const gridRowEnd = GridRowEnd.checkProperty(props.gridRowEnd, gridRow.end, all);

          const gridTemplate = props.gridTemplate
               ? props.gridTemplate
               : props.grid
               ? GridTemplate.new(grid.templateRows, grid.templateColumns)
               : {};
          const gridTemplateColumns = GridTemplateColumn.checkProperty(
               props.gridTemplateColumns,
               gridTemplate.columns,
               all
          );
          const gridTemplateRows = GridTemplateRow.checkProperty(
               props.gridTemplateRows,
               gridTemplate.rows,
               all
          );
          const gridTemplateAreas = props.gridTemplateAreas
               ? props.gridTemplateAreas
               : grid.templateAreas;

          const captionSide = CaptionSide.checkProperty(props.captionSide, all);

          const caretColor = Colors.validateColor(props.caretColor, all, "black");

          const clear = Clear.checkProperty(props.clear, all);

          const direction = Direction.checkProperty(props.direction, all);

          const emptyCells = EmptyCells.checkProperty(props.emptyCells, all);

          const float = Float.checkProperty(props.float, all);

          const hangingPunctuation = HangingPunctuation.checkProperty(
               props.hangingPunctuation,
               all
          );

          const hyphens = Hyphens.checProperty(props.hyphens, all);

          const isolation = Isolation.checkProperty(props.isolation, all);

          const letterSpacing = LetterSpacing.checkProperty(props.letterSpacing, all);

          const lineHeight = LineHeight.checkProperty(props.lineHeight, all);

          const listStyle = props.listStyle ? props.listStyle : {};
          const listStyleImage = props.listStyleImage ? props.listStyleImage : listStyle.image;
          const listStylePosition = ListStylePosition.checkProperty(
               props.listStylePosition,
               listStyle.position
          );
          const listStyleType = ListStyleType.checkProperty(props.listStyleType, listStyle.type);

          const mixBlendMode = MixBlendMode.checkProperty(props.mixBlendMode, all);

          const objectFit = ObjectFit.checkProperty(props.objectFit, all);
          const objectPosition = ObjectPosition.checkProperty(props.objectPosition, all);

          const order = Order.checkProperty(props.order, all);

          const outline = props.outline ? props.outline : {};
          const outlineOffset = OutlineOffset.checkProperty(
               props.outlineOffset,
               outline.offset,
               all
          );
          const outlineColor = Colors.validateColor(props.outlineColor, outline.color, all);
          const outlineStyle = OutlineStyle.checkProperty(props.outlineStyle, outline.style, all);
          const outlineWidth = OutlineWidth.checkProperty(props.outlineWidth, outline.width, all);

          const overflow = Overflow.checkProperty(props.overflow, all);
          const overflowX = OverflowX.checkProperty(props.overflowX, all);
          const overflowY = OverflowY.checkProperty(props.overflowY, all);

          const textOverflow = props.textOverflow ? props.textOverflow : all;

          const textIndent = TextIndent.checkProperty(props.textIndent, all);
          const tabSize = TabSize.checkProperty(props.tabSize, all);
          const textShadow = props.textShadow ? props.textShadow : "";
          const textTransform = TextTransform.checkProperty(props.textTransform, all);

          const verticalAlign = VerticalAlign.checkProperty(props.verticalAlign, all);

          const scrollBehavior = ScrollBehavior.checkProperty(props.scrollBehavior, all);

          const visibility = Visibility.checkProperty(props.visibility, all);

          const wordBreak = WordBreak.checkProperty(props.wordBreak, all);
          const wordSpacing = WordSpacing.checkProperty(props.wordSpacing, all);
          const writingMode = WritingMode.checkProperty(props.writingMode, all);

          const zIndex = ZIndex.checkProperty(props.zIndex, all);

          const userSelect = UserSelect.checkProperty(props.userSelect, all);

          const whiteSpace = WhiteSpace.checkProperty(props.whiteSpace, all);

          const pageBreakInside = PageBreakInside.checkProperty(props.pageBreakInside, all);
          const pageBreakBefore = PageBreakBefore.checkProperty(props.pageBreakBefore, all);
          const pageBreakAfter = PageBreakAfter.checkProperty(props.pageBreakAfter, all);

          const perspective = Perspective.checkProperty(props.perspective, all);

          const columnRule = props.columnRule ? props.columnRule : {};

          const columnRuleColor = Colors.validateColor(
               props.columnRuleColor,
               columnRule.color,
               all
          );
          const columnRuleStyle = ColumnRuleStyle.checkProperty(
               props.columnRuleStyle,
               columnRule.style,
               all
          );
          const columnRuleWidth = Height.checkProperty(
               props.columnRuleWidth,
               columnRule.width,
               all
          );

          const columns = props.columns ? props.columns : {};
          const columnWidth = Height.checkProperty(props.columnWidth, columns.width, all);
          const columnCount = ColumnCount.checkProperty(props.columnCount, columns.count, all);

          const columnSpan = ColumnSpan.checkProperty(props.columnSpan, all);

          const cursor = Cursor.checkProperty(props.cursor, all);

          const transform = props.transform ? props.transform : Transform.None;

          const transformOrigin = TransformOrigin.checkProperty(props.transformOrigin, all);

          const transformStyle = TransformStyle.checkProperty(props.transformStyle, all);

          const animation = props.animation ? props.animation : {};

          const animationDelay = AnimationDelay.checkProperty(
               props.animationDelay,
               animation.delay,
               all
          );

          const animationDirection = AnimationDirection.checkProperty(
               props.animationDirection,
               animation.direction,
               all
          );

          const animationDuration = AnimationDuration.checkProperty(
               props.animationDuration,
               animation.duration,
               all
          );

          const animationFillMode = AnimationFillMode.checkProperty(
               props.animationFillMode,
               animation.fillMode,
               all
          );

          const animationIterationCount = AnimationIterationCount.checkProperty(
               props.animationIterationCount,
               animation.iterationCount,
               all
          );

          const animationName = props.animationName
               ? props.animationName
               : animation.name
               ? animation.name
               : all;

          const animationPlayState = AnimationPlayState.checkProperty(
               props.animationPlayState,
               animation.playState,
               all
          );

          const animationTimingFunction = AnimationTimingFunction.checkProperty(
               props.animationTimingFunction,
               animation.timingFunction,
               all
          );

          const clip = Clip.checkProperty(props.clip, all);

          const content = props.content ? props.content : all;

          const filter = props.filter ? props.filter : all;

          const transition = props.transition ? props.transition : {};

          const transitionProperty = props.transitionProperty
               ? props.transitionProperty
               : transition.property
               ? transition.property
               : "";

          const transitionDelay = TransitionDelay.checkProperty(
               props.transitionDelay,
               transition.delay,
               all
          );

          const transitionDuration = TransitionDuration.checkProperty(
               props.transitionDuration,
               transition.duration,
               all
          );

          const transitionTimingFunction = TransitionTimingFunction.checkProperty(
               props.transitionTimingFunction,
               transition.timingFunction
          );

          // CSS -------------------------------------------------------------------------------------------------------------------------
          // CSS -------------------------------------------------------------------------------------------------------------------------

          const selectorContent = `
          ${props.backgroundColor && `background-color: ${backgroundColor};`}
          ${props.color && `color: ${color}; `}
          ${props.alignContent && `align-content: ${alignContent};`}
          ${props.alignItems && `align-items: ${alignItems};`}
          ${props.alignSelf && `align-self: ${alignSelf};`}
          ${
               props.backfaceVisibility &&
               `backface-visibility: ${backfaceVisibility};
               -webkit-backface-visibility: ${backfaceVisibility};`
          }
          ${
               (props.backgroundAttachment || props.background) &&
               `background-attachment: ${backgroundAttachment};`
          }
          ${
               (props.backgroundBlendMode || props.background) &&
               `background-blend-mode: ${backgroundBlendMode};`
          }
          ${(props.backgroundClip || props.background) && `background-clip: ${backgroundClip};`}
          ${(props.backgroundImage || props.background) && `background-image: ${backgroundImage};`}
          ${
               (props.backgroundOrigin || props.background) &&
               `background-origin: ${backgroundOrigin};`
          }
          ${
               (props.backgroundPosition || props.background) &&
               `background-position: ${backgroundPosition};`
          }
          ${
               (props.backgroundRepeat || props.background) &&
               `background-repeat: ${backgroundRepeat};`
          }
          ${(props.backgroundSize || props.background) && `background-size: ${backgroundSize};`}
          ${props.borderCollapse && `border-collapse: ${borderCollapse};`}
          ${props.borderSpacing && `border-spacing: ${borderSpacing};`}
          ${
               (props.borderTopStyle || props.border || props.borderTop || props.borderStyle) &&
               `border-top-style: ${borderTopStyle};`
          }
          ${
               (props.borderTopWidth || props.border || props.borderTop || props.borderWidth) &&
               `border-top-width: ${borderTopWidth};`
          }
          ${
               (props.borderTopColor || props.border || props.borderTop || props.borderColor) &&
               `border-top-color: ${borderTopColor};`
          }
          ${
               (props.borderRightStyle || props.border || props.borderRight || props.borderStyle) &&
               `border-right-style: ${borderRightStyle};`
          }    
          ${
               (props.borderRightWidth || props.border || props.borderRight || props.borderWidth) &&
               `border-right-width: ${borderRightWidth};`
          }
          ${
               (props.borderRightColor || props.border || props.borderRight || props.borderColor) &&
               `border-right-color: ${borderRightColor};`
          } 
          ${
               (props.borderBottomStyle ||
                    props.border ||
                    props.borderBottom ||
                    props.borderStyle) &&
               `border-bottom-style: ${borderBottomStyle};`
          }
          ${
               (props.borderBottomWidth ||
                    props.border ||
                    props.borderBottom ||
                    props.borderWidth) &&
               `border-bottom-width: ${borderBottomWidth};`
          }
          ${
               (props.borderBottomColor ||
                    props.border ||
                    props.borderBottom ||
                    props.borderColor) &&
               `border-bottom-color: ${borderBottomColor};`
          }
          ${
               (props.borderLeftStyle || props.border || props.borderLeft || props.borderStyle) &&
               `border-left-style: ${borderLeftStyle};`
          }
          ${
               (props.borderLeftWidth || props.border || props.borderLeft || props.borderWidth) &&
               `border-left-width: ${borderLeftWidth};`
          }
          ${
               (props.borderLeftColor || props.border || props.borderLeft || props.borderColor) &&
               `border-left-color: ${borderLeftColor};`
          }
          ${
               (props.borderTopRightRadius || props.borderRadius) &&
               `border-top-right-radius: ${borderTopRightRadius};`
          }
          ${
               (props.borderBottomRightRadius || props.borderRadius) &&
               `border-bottom-right-radius: ${borderBottomRightRadius};`
          }
          ${
               (props.borderBottomLeftRadius || props.borderRadius) &&
               `border-bottom-left-radius: ${borderBottomLeftRadius};`
          }
          ${
               (props.borderTopLeftRadius || props.borderRadius) &&
               `border-top-left-radius: ${borderTopLeftRadius};`
          }
          ${props.borderImageOutset && `border-image-outset: ${borderImageOutset};`}
          ${props.borderImageRepeat && `border-image-repeat: ${borderImageRepeat};`}
          ${props.borderImageSlice && `border-image-slice: ${borderImageSlice};`}
          ${props.borderImageWidth && `border-image-width: ${borderImageWidth};`}
          ${props.borderImageSource && `border-image-source: ${borderImageSource};`}
          ${
               props.boxDecorationBreak &&
               `-webkit-box-decoration-break: ${boxDecorationBreak};
               -o-box-decoration-break: ${boxDecorationBreak};
               box-decoration-break: ${boxDecorationBreak};`
          }
          ${props.boxShadow && `box-shadow: ${boxShadow};`}
          ${props.boxSizing && `box-sizing: ${boxSizing};`}
          ${props.breakAfter && `break-after: ${breakAfter};`}
          ${props.breakInside && `break-inside: ${breakInside};`}
          ${props.breakBefore && `break-before: ${breakBefore} ;`}
          ${props.columnCount && `column-count: ${columnCount};`}
          ${props.columnFill && `column-fill: ${columnFill};`}
          ${props.columnRuleStyle && `column-rule-style: ${columnRuleStyle};`}
          ${props.columnRuleColor && `column-rule-color: ${columnRuleColor};`}
          ${props.columnRuleWidth && `column-rule-width: ${columnRuleWidth};`}
          ${props.columnSpan && `column-span: ${columnSpan};`}
          ${props.columnWidth && `column-width: ${columnWidth};`}
          ${props.cursor && `cursor: ${cursor};`}
          ${props.fontSize && `font-size: ${fontSize};`}
          ${props.fontFamily && `font-family: ${fontFamily};`}
          ${props.fontStyle && `font-style: ${fontStyle};`}
          ${props.fontWeight && `font-weight: ${fontWeight};`}
          ${props.fontStretch && `font-stretch: ${fontStretch};`}
          ${props.textAlign && `text-align: ${textAlign};`}
          ${props.textAlignLast && `text-align-last: ${textAlignLast};`}
          ${props.textJustify && `text-justify: ${textJustify};`}
          ${props.textDecorationColor && `text-decoration-color: ${textDecorationColor};`}
          ${props.textDecorationLine && `text-decoration-line: ${textDecorationLine};`}
          ${props.textDecorationStyle && `text-decoration-style: ${textDecorationStyle};`}
          ${props.display && `display: ${display};`}
          ${props.flexDirection && `flex-direction: ${flexDirection};`}
          ${props.flexBasis && `flex-basis: ${flexBasis};`}
          ${props.flexWrap && `flex-wrap: ${flexWrap};`}
          ${props.flexGrow && `flex-grow: ${flexGrow};`}
          ${props.flexShrink && `flex-shrink: ${flexShrink};`}
          ${props.gridColumnGap && `grid-column-gap: ${gridColumnGap};`}
          ${props.columnGap && `column-gap: ${columnGap};`}
          ${props.gridRowGap && `grid-row-gap: ${gridRowGap};`}
          ${props.rowGap && `row-gap: ${rowGap};`}
          ${props.gridAutoColumns && `grid-auto-columns: ${gridAutoColumns};`}
          ${props.gridAutoRows && `grid-auto-rows: ${gridAutoRows};`}
          ${props.gridAutoFlow && `grid-auto-flow: ${gridAutoFlow};`}
          ${props.gridTemplateAreas && `grid-template-areas: ${gridTemplateAreas};`}
          ${props.gridRowStart && `grid-row-start: ${gridRowStart};`}
          ${props.gridRowEnd && `grid-row-end: ${gridRowEnd};`}
          ${props.gridColumnStart && `grid-column-start: ${gridColumnStart};`}
          ${props.gridColumnEnd && `grid-column-end: ${gridColumnEnd};`}
          ${props.gridTemplateRows && `grid-template-rows: ${gridTemplateRows};`}
          ${props.gridTemplateColumns && `grid-template-columns: ${gridTemplateColumns};`}
          ${props.width && `width: ${width};`}
          ${props.maxWidth && `max-width: ${maxWidth};`}
          ${props.minWidth && `min-width: ${minWidth};`}
          ${props.height && `height: ${height};`}
          ${props.maxHeight && `max-height: ${maxHeight};`}
          ${props.minHeight && `min-height: ${minHeight};`}
          ${props.top && `top: ${top};`}
          ${props.right && `right: ${right};`}
          ${props.bottom && `bottom: ${bottom};`}
          ${props.left && `left: ${left};`}
          ${
               props.position &&
               `position: -webkit ${position};
          position: ${position};`
          }
          ${
               (props.paddingTop || props.paddingVertical || props.padding) &&
               `padding-top: ${paddingTop};`
          }
          ${
               (props.paddingBottom || props.paddingVertical || props.padding) &&
               `padding-bottom: ${paddingBottom};`
          }
          ${
               (props.paddingRight || props.paddingHorizontal || props.padding) &&
               `padding-right: ${paddingRight};`
          }
          ${
               (props.paddingLeft || props.paddingHorizontal || props.padding) &&
               `padding-left: ${paddingLeft};`
          }

          ${
               (props.marginTop || props.marginVertical || props.margin) &&
               `margin-top: ${marginTop};`
          }
          ${
               (props.marginBottom || props.marginVertical || props.margin) &&
               `margin-bottom: ${marginBottom};`
          }
          ${
               (props.marginRight || props.marginHorizontal || props.margin) &&
               `margin-right: ${marginRight};`
          }
          ${
               (props.marginLeft || props.marginHorizontal || props.margin) &&
               `margin-left: ${marginLeft};`
          }
          ${props.opacity && `opacity: ${opacity};`}
          ${props.justifyContent && `justify-content: ${justifyContent};`}
          ${props.captionSide && `caption-side: ${captionSide};`}
          ${props.caretColor && `caret-color: ${caretColor};`}
          ${props.clear && `clear: ${clear};`}
          ${props.direction && `direction: ${direction};`}
          ${props.emptyCells && `empty-cells: ${emptyCells};`}
          ${props.fontKerning && `font-kerning: ${fontKerning};`}
          ${props.fontVariant && `font-variant: ${fontVariant};`}
          ${props.fontVariantCaps && `font-variant-caps: ${fontVariantCaps};`}
          ${props.hangingPunctuation && `hanging-punctuation: ${hangingPunctuation};`}
          ${
               props.hyphens &&
               `-webkit-hyphens: ${hyphens};
               -ms-hyphens: ${hyphens};
               hyphens: ${hyphens};`
          }
          ${props.isolation && `isolation: ${isolation};`}
          ${props.letterSpacing && `letter-spacing: ${letterSpacing};`}
          ${props.lineHeight && `line-height: ${lineHeight};`}
          ${props.listStyleImage && `list-style-image: ${listStyleImage};`}
          ${props.listStylePosition && `list-style-position: ${listStylePosition};`}
          ${props.listStyleType && `list-style-type: ${listStyleType};`}
          ${props.mixBlendMode && `mix-blend-mode: ${mixBlendMode};`}
          ${props.objectFit && `object-fit: ${objectFit};`}
          ${props.objectPosition && `object-position: ${objectPosition};`}
          ${props.order && `order: ${order};`}
          ${props.outlineColor && `outline-color: ${outlineColor};`}
          ${props.outlineOffset && `outline-offset: ${outlineOffset};`} 
          ${props.outlineStyle && `outline-style: ${outlineStyle};`}
          ${props.outlineWidth && `outline-width: ${outlineWidth};`}
          ${props.overflow && `overflow: ${overflow};`}
          ${props.overflowX && `overflow-x: ${overflowX};`}
          ${props.overflowY && `overflow-y: ${overflowY};`}
          ${props.textOverflow && `text-overflow: ${textOverflow};`}
          ${props.textIndent && `text-indent: ${textIndent};`}
          ${props.PageBreakInside && `page-break-inside: ${pageBreakInside};`}
          ${props.pageBreakAfter && `page-break-after: ${pageBreakAfter};`}
          ${props.pageBreakBefore && `page-break-before: ${pageBreakBefore};`}
          ${props.perspective && `perspective: ${perspective};`}
          ${
               props.tabSize &&
               `-moz-tab-size: ${tabSize};
               tab-size: ${tabSize};`
          }
          ${props.float && `float:${float}`}
          ${props.textShadow && `text-shadow: ${textShadow};`}
          ${props.textTransform && `text-transform: ${textTransform};`}
          ${props.transform && `transform: ${transform};`}
          ${props.transformOrigin && `transform-origin: ${transformOrigin};`}
          ${props.transformStyle && `transform-style: ${transformStyle};`}
          ${props.verticalAlign && `vertical-align: ${verticalAlign};`}
          ${props.scrollBehavior && `scroll-behavior: ${scrollBehavior};`}
          ${props.visibility && `visibility: ${visibility};`}
          ${props.userSelect && `user-select: ${userSelect};`}
          ${props.whiteSpace && `white-space: ${whiteSpace};`}
          ${props.wordBreak && `word-break: ${wordBreak};`}
          ${props.wordSpacing && `word-spacing: ${wordSpacing};`}
          ${props.writingMode && `writing-mode: ${writingMode};`}
          ${props.zIndex && `z-index: ${zIndex};`}
          ${(props.animationDelay || props.animation) && `animation-delay:${animationDelay};`}
          ${
               (props.animationDirection || props.animation) &&
               `animation-direction:${animationDirection};`
          }
          ${
               (props.animationDuration || props.animation) &&
               `animation-duration:${animationDuration};`
          }
          ${
               (props.animationFillMode || props.animation) &&
               `animation-fill-mode:${animationFillMode};`
          }
          ${
               (props.animationIterationCount || props.animation) &&
               `animation-iteration-count:${animationIterationCount};`
          }
          ${(props.animationName || props.animation) && `animation-name:${animationName};`}
          ${
               (props.animationPlayState || props.animation) &&
               `animation-play-state:${animationPlayState};`
          }
          ${
               (props.animationTimingFunction || props.animation) &&
               `animation-timing-function:${animationTimingFunction};`
          }
          ${props.clip && `clip:${clip};`}
          ${props.content && `content:${content};`}
          ${props.filter && `filter:${filter};`}
          ${
               (props.transitionProperty || props.transition) &&
               `transition-property:${transitionProperty};`
          }
          ${(props.transitionDelay || props.transition) && `transition-delay:${transitionDelay};`}
          ${
               (props.transitionDuration || props.transition) &&
               `transition-duration:${transitionDuration};`
          }
          ${
               (props.transitionTimingFunction || props.transition) &&
               `transition-timing-function:${transitionTimingFunction};`
          }
          `;

          const output = `${selectorContent}`
               .split("undefined")
               .filter((e) => /\n/gm.test(e.trim()));

          console.log(output);

          return selectorContent;
     }
}

export default Selector;
