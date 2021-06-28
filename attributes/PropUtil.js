import Display from "./Display";
import FlexDirection from "./FlexDirection";
import AlignContent from "./AlignContent";
import AlignItems from "./AlignItems";
import AlignSelf from "./AlignSelf";
import All from "./All";
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
import Util from "./Util";
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
import MaxLines from "./MaxLines";
import LineClamp from "./LineClamp";
import Selector from "./Selector";

class PropUtil {
     /**
      * Check if the passed property ``prop`` is a real property in ``propList`` and return it depending on the result.
      *
      * @param {*} prop property to check.
      * @param {*} propList list of all property.
      * @param {*} backup the first backup property.
      * @param {*} backup2 the second backup property.
      * @returns prop if it exists in propList, else return backup if it exists in propList, otherwise returns backup2.
      */
     static isProperty(prop, propList, backup, backup2 = "initial") {
          if (propList.includes(prop)) {
               return prop;
          } else if (propList.includes(backup)) {
               return backup;
          } else {
               return backup2;
          }
     }

     static isOpacity(prop, backup, backup2) {
          if (Util.isBetween(prop, 0, 1)) return prop;
          if (Util.isBetween(backup, 0, 1)) return backup;
          if (Util.isBetween(backup2, 0, 1)) return backup2;
          return this.isProperty(prop, ["initial", "inherit"], backup, backup2);
     }

     static isLengthProperty(prop, propList, backup, backup2) {
          if (Length.isValidLength(prop)) return prop;
          if (Length.isValidLength(backup)) return backup;
          if (Length.isValidLength(backup2)) return backup2;
          return this.isProperty(prop, propList, backup, backup);
     }

     static isDimensionsProperty(prop, propList, backup, backup2) {
          if (Length.isValidInput(prop)) return prop;
          if (Length.isValidInput(backup)) return backup;
          if (Length.isValidInput(backup2)) return backup2;
          return this.isProperty(prop, propList, backup, backup);
     }

     static isPositionProperty(prop, propList, backup, backup2) {
          if (Length.isValidPosition(prop)) return prop;
          if (Length.isValidPosition(backup)) return backup;
          if (Length.isValidPosition(backup2)) return backup2;
          return this.isProperty(prop, propList, backup, backup);
     }

     static isOrderProperty(prop, propList, backup, backup2) {
          if (/^(\d+)$/.test(prop)) return prop;
          if (/^(\d+)$/.test(backup)) return backup;
          if (/^(\d+)$/.test(backup2)) return backup2;
          return this.isProperty(prop, propList, backup, backup);
     }

     static isTimeProperty(prop, propList, backup, backup2) {
          const regex = /^(\d+)(.(\d+))?(s|ms)$/;
          if (regex.test(prop)) return prop;
          if (regex.test(backup)) return backup;
          if (regex.test(backup2)) return backup2;
          return this.isProperty(prop, propList, backup, backup2);
     }

     /**
      * Your service will be remembered.
      * @deprecated
      * @param {*} props
      * @returns
      */
     static getCSS(props) {
          if (props.props) props = props.props;

          const all = All.checkProperty(props.all, All.Initial);

          const alignContent = AlignContent.checkProperty(props.alignContent, all);

          const alignItems = AlignItems.checkProperty(props.alignItems, all);

          const alignSelf = AlignSelf.checkProperty(props.alignSelf, all);

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
          const border = props.border ? props.border : {};

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
          // const borderRadius = props.borderRadius ? props.borderRadius : {};

          const borderRadius = Length.isValidInput(props.borderRadius)
               ? Length.radiusToJSON(props.borderRadius)
               : props.borderRadius
               ? props.borderRadius
               : {};

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

          const maxLines = MaxLines.checkProperty(props.maxLines, all, "none");
          const lineClamp = LineClamp.checkProperty(props.lineClamp, all, "all");

          // CSS -------------------------------------------------------------------------------------------------------------------------
          // CSS -------------------------------------------------------------------------------------------------------------------------

          const css = `  all : ${all};
                         align-content: ${alignContent};
                         align-items: ${alignItems};
                         align-self: ${alignSelf};
                         animation-name: ${animationName};
                         animation-delay: ${animationDelay};
                         animation-direction: ${animationDirection};
                         animation-duration: ${animationDuration};
                         animation-fill-mode: ${animationFillMode};
                         animation-iteration-count: ${animationIterationCount};
                         animation-play-state: ${animationPlayState};
                         animation-timing-function: ${animationTimingFunction};
                         clip: ${clip};
                         content: ${content};
                         filter: ${filter};
                         backface-visibility: ${backfaceVisibility};
                         -webkit-backface-visibility: ${backfaceVisibility};
                         background-attachment: ${backgroundAttachment};
                         background-blend-mode: ${backgroundBlendMode};
                         background-clip: ${backgroundClip};
                         background-color: ${backgroundColor};
                         background-image: ${backgroundImage};
                         background-origin: ${backgroundOrigin};
                         background-position: ${backgroundPosition};
                         background-repeat: ${backgroundRepeat};
                         background-size: ${backgroundSize};
                         border-collapse: ${borderCollapse};
                         border-spacing: ${borderSpacing};
                         border-top-style: ${borderTopStyle};
                         border-top-width: ${borderTopWidth};
                         border-top-color: ${borderTopColor};
                         border-right-style: ${borderRightStyle};
                         border-right-width: ${borderRightWidth};
                         border-right-color: ${borderRightColor};
                         border-bottom-style: ${borderBottomStyle};
                         border-bottom-width: ${borderBottomWidth};
                         border-bottom-color: ${borderBottomColor};
                         border-left-style: ${borderLeftStyle};
                         border-left-width: ${borderLeftWidth};
                         border-left-color: ${borderLeftColor};
                         border-top-right-radius: ${borderTopRightRadius};
                         border-bottom-right-radius: ${borderBottomRightRadius};
                         border-bottom-left-radius: ${borderBottomLeftRadius};
                         border-top-left-radius: ${borderTopLeftRadius};
                         border-image-outset: ${borderImageOutset};
                         border-image-repeat: ${borderImageRepeat};
                         border-image-slice: ${borderImageSlice};
                         border-image-width: ${borderImageWidth};
                         border-image-source: ${borderImageSource};
                         -webkit-box-decoration-break: ${boxDecorationBreak};
                         -o-box-decoration-break: ${boxDecorationBreak};
                         box-decoration-break: ${boxDecorationBreak};
                         box-shadow: ${boxShadow};
                         box-sizing: ${boxSizing};
                         break-after: ${breakAfter};
                         break-inside: ${breakInside};
                         break-before: ${breakBefore} ;
                         color: ${color};
                         column-count: ${columnCount};
                         column-fill: ${columnFill};
                         column-rule-style: ${columnRuleStyle};
                         column-rule-color: ${columnRuleColor};
                         column-rule-width: ${columnRuleWidth};
                         column-span: ${columnSpan};
                         column-width: ${columnWidth};
                         cursor: ${cursor};
                         font-size: ${fontSize};
                         font-family: ${fontFamily};
                         font-style: ${fontStyle};
                         font-weight: ${fontWeight};
                         font-stretch: ${fontStretch};
                         text-align: ${textAlign};
                         text-align-last: ${textAlignLast};
                         text-justify: ${textJustify};
                         text-decoration-color: ${textDecorationColor};
                         text-decoration-line: ${textDecorationLine};
                         text-decoration-style: ${textDecorationStyle};
                         display: ${display};
                         flex-direction: ${flexDirection};
                         flex-basis: ${flexBasis};
                         flex-wrap: ${flexWrap};
                         flex-grow: ${flexGrow};
                         flex-shrink: ${flexShrink};
                         grid-column-gap: ${gridColumnGap};
                         column-gap: ${columnGap};
                         grid-row-gap: ${gridRowGap};
                         row-gap: ${rowGap};
                         grid-auto-columns: ${gridAutoColumns};
                         grid-auto-rows: ${gridAutoRows};
                         grid-auto-flow: ${gridAutoFlow};
                         grid-template-areas: ${gridTemplateAreas};
                         grid-row-start: ${gridRowStart};
                         grid-row-end: ${gridRowEnd};
                         grid-column-start: ${gridColumnStart};
                         grid-column-end: ${gridColumnEnd};
                         grid-template-rows: ${gridTemplateRows};
                         grid-template-columns: ${gridTemplateColumns};
                         width: ${width};
                         max-width: ${maxWidth};
                         max-lines: ${maxLines};
                         min-width: ${minWidth};
                         height: ${height};
                         max-height: ${maxHeight};
                         min-height: ${minHeight};
                         top: ${top};
                         right: ${right};
                         bottom: ${bottom};
                         left: ${left};
                         -webkit-line-clamp:${lineClamp};
                         position: -webkit ${position};
                         position: ${position};
                         padding-top: ${paddingTop};
                         padding-right: ${paddingRight};
                         padding-bottom: ${paddingBottom};
                         padding-left: ${paddingLeft};
                         margin-top: ${marginTop};
                         margin-right: ${marginRight};
                         margin-bottom: ${marginBottom};
                         margin-left: ${marginLeft};
                         opacity: ${opacity};
                         justify-content: ${justifyContent};
                         caption-side: ${captionSide};
                         caret-color: ${caretColor};
                         clear: ${clear};
                         direction: ${direction};
                         empty-cells: ${emptyCells};
                         float: ${float};
                         font-kerning: ${fontKerning};
                         font-variant: ${fontVariant};
                         font-variant-caps: ${fontVariantCaps};
                         hanging-punctuation: ${hangingPunctuation};
                         -webkit-hyphens: ${hyphens};
                         -ms-hyphens: ${hyphens};
                         hyphens: ${hyphens};
                         isolation: ${isolation};
                         letter-spacing: ${letterSpacing};
                         line-height: ${lineHeight};
                         list-style-image: ${listStyleImage};
                         list-style-position: ${listStylePosition};
                         list-style-type: ${listStyleType};
                         mix-blend-mode: ${mixBlendMode};
                         object-fit: ${objectFit};
                         object-position: ${objectPosition};
                         order: ${order};
                         outline-color: ${outlineColor};
                         outline-offset: ${outlineOffset};
                         outline-style: ${outlineStyle};
                         outline-width: ${outlineWidth};
                         overflow: ${overflow};
                         overflow-x: ${overflowX};
                         overflow-y: ${overflowY};
                         text-overflow: ${textOverflow};
                         text-indent: ${textIndent};
                         -moz-tab-size: ${tabSize};
                         page-break-inside: ${pageBreakInside};
                         page-break-after: ${pageBreakAfter};
                         page-break-before: ${pageBreakBefore};
                         perspective: ${perspective};
                         tab-size: ${tabSize};
                         text-shadow: ${textShadow};
                         text-transform: ${textTransform};
                         transform: ${transform};
                         transform-origin: ${transformOrigin};
                         transform-style: ${transformStyle};
                         vertical-align: ${verticalAlign};
                         scroll-behavior: ${scrollBehavior};
                         visibility: ${visibility};
                         user-select: ${userSelect};
                         white-space: ${whiteSpace};
                         word-break: ${wordBreak};
                         word-spacing: ${wordSpacing};
                         writing-mode: ${writingMode};
                         z-index: ${zIndex};
                         transition-property: ${transitionProperty};
                         transition-delay: ${transitionDelay};
                         transition-duration: ${transitionDuration};
                         transition-timing-function: ${transitionTimingFunction};
    `;

          return css;
     }
}

export default PropUtil;
