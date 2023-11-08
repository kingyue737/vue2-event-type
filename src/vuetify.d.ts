import type { CalendarTimestamp as VTimestamp } from "vuetify";

import type { DefineComponent, VNode } from "vue";
type eventHandler = Function;
interface srcObject {
  src: string;
  srcset?: string;
  lazySrc: string;
  aspect: number;
}

export type InputValidationRule = (value: any) => string | boolean;
// We define our own InputValidationRules because vuetify incorrectly does not include
// boolean as a valid array member in its definition of InputValidationRules.
export type InputValidationRules = (InputValidationRule | string | boolean)[];

declare module "vue" {
  export interface GlobalComponents {
    VCalendar: DefineComponent<
      {
        /** Specifies what categories to display in the `category` view. This controls the order of the categories as well. If the calendar uses events any categories specified in those events not specified in this value are dynamically rendered in the view unless `category-hide-dynamic` is true. */
        categories?: any[] | string | null;
        /** The number of days to render in the `category` view. */
        categoryDays?: number | string | null;
        /** The category to place events in that have invalid categories. A category is invalid when it is not a string. By default events without a category are not displayed until this value is specified. */
        categoryForInvalid?: string | null;
        /** Sets whether categories specified in an event should be hidden if it's not defined in `categories`. */
        categoryHideDynamic?: boolean | null;
        /** Set whether the `category` view should show all defined `categories` even if there are no events for a category. */
        categoryShowAll?: boolean | null;
        /** If categories is a list of objects, you can use this to determine what property to print out as the category text on the calendar. You can provide a function to do some logic or just define the prop name. It's similar to item-text on v-select */
        categoryText?: string | Function | null;
        /** Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors). */
        color?: string | null;
        /** Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html). */
        dark?: boolean | null;
        /** Formats day of the month string that appears in a day to a specified locale */
        dayFormat?: Function | null;
        /** The ending date on the calendar (inclusive) in the format of `YYYY-MM-DD`. This may be ignored depending on the `type` of the calendar. */
        end?: string | number | Date | null;
        /** Set property of *event*'s category. Instead of a property a function can be given which takes an event and returns the category. */
        eventCategory?: string | Function | null;
        /** A background color for all events or a function which accepts an event object passed to the calendar to return a color. */
        eventColor?: string | Function | null;
        /** Set property of *event*'s end timestamp. */
        eventEnd?: string | null;
        /** The height of an event in pixels in the `month` view and at the top of the `day` views. */
        eventHeight?: number | null;
        /** Margin bottom for event */
        eventMarginBottom?: number | null;
        /** Whether the more 'button' is displayed on a calendar with too many events in a given day. It will say something like '5 more' and when clicked generates a `click:more` event. */
        eventMore?: boolean | null;
        /** The text to display in the more 'button' given the number of hidden events. */
        eventMoreText?: string | null;
        /** Set property of *event*'s displayed name, or a function which accepts an event object passed to the calendar as the first argument and a flag signalling whether the name is for a timed event (true) or an event over a day. */
        eventName?: string | Function | null;
        /** One of `stack`, `column`, or a custom render function */
        eventOverlapMode?: string | Function | null;
        /** A value in minutes that's used to determine whether two timed events should be placed in column beside each other or should be treated as slightly overlapping events. */
        eventOverlapThreshold?: string | number | null;
        /** Applies the `v-ripple` directive. */
        eventRipple?: boolean | object | null;
        /** Set property of *event*'s start timestamp. */
        eventStart?: string | null;
        /** A text color for all events or a function which accepts an event object passed to the calendar to return a color. */
        eventTextColor?: string | Function | null;
        /** If Dates or milliseconds are used as the start or end timestamp of an event, this prop can be a string to a property on the event that is truthy if the event is a timed event or a function which takes the event and returns a truthy value if the event is a timed event. */
        eventTimed?: string | Function | null;
        /** An array of event objects with a property for a start timestamp and optionally a name and end timestamp. If an end timestamp is not given, the value of start will be used. If no name is given, you must provide an implementation for the `event` slot. */
        events?: any[] | null;
        /** The first interval to display in the `day` view. If `intervalMinutes` is set to 60 and this is set to 9 the first time in the view is 9am. */
        firstInterval?: number | string | null;
        /** The first time to display in the `day` view. If specified, this overwrites any `firstInterval` value specified. This can be the number of minutes since midnight, a string in the format of `HH:mm`, or an object with number properties hour and minute. */
        firstTime?: number | string | object | null;
        /** If the header at the top of the `day` view should be visible. */
        hideHeader?: boolean | null;
        /** The number of intervals to display in the `day` view. */
        intervalCount?: number | string | null;
        /** Formats time of day string that appears in the interval gutter of the `day` and `week` view to specified locale */
        intervalFormat?: Function | null;
        /** The height of an interval in pixels in the `day` view. */
        intervalHeight?: number | string | null;
        /** The number of minutes the intervals are in the `day` view. A common interval is 60 minutes so the intervals are an hour. */
        intervalMinutes?: number | string | null;
        /** Returns CSS styling to apply to the interval. */
        intervalStyle?: Function | null;
        /** The width of the interval gutter on the left side in the `day` view. */
        intervalWidth?: number | string | null;
        /** Applies the light theme variant to the component. */
        light?: boolean | null;
        /** The locale of the calendar. */
        locale?: string | null;
        /** Sets the day that determines the first week of the year, starting with 0 for **Sunday**. For ISO 8601 this should be 4. */
        localeFirstDayOfYear?: string | number | null;
        /** The maximum number of days to display in the custom calendar if an `end` day is not set. */
        maxDays?: number | null;
        /** The minimum number of weeks to display in the `month` or `week` view. */
        minWeeks?: any | null;
        /** Formats month string that appears in a day to specified locale */
        monthFormat?: Function | null;
        /** Override the day & time which is considered now. This is in the format of `YYYY-MM-DD hh:mm:ss`. The calendar is styled according to now. */
        now?: string | null;
        /** If true, the intervals in the `day` view will be 9 AM as opposed to 09:00 AM */
        shortIntervals?: boolean | null;
        /** Whether the short versions of a month should be used (Jan vs January). */
        shortMonths?: boolean | null;
        /** Whether the short versions of a weekday should be used (Mon vs Monday). */
        shortWeekdays?: boolean | null;
        /** Checks if a given day and time should be displayed in the interval gutter of the `day` view. */
        showIntervalLabel?: Function | null;
        /** Whether the name of the month should be displayed on the first day of the month. */
        showMonthOnFirst?: boolean | null;
        /** Whether week numbers should be displayed when using the `month` view. */
        showWeek?: boolean | null;
        /** The starting date on the calendar (inclusive) in the format of `YYYY-MM-DD`. This may be ignored depending on the `type` of the calendar. */
        start?: string | number | Date | null;
        /** A string which is one of `month`, `week`, `day`, `4day`, `custom-weekly`, `custom-daily`, and `category`. The custom types look at the `start` and `end` dates passed to the component as opposed to the `value`. */
        type?: string | null;
        /** A date in the format of `YYYY-MM-DD` which determines what span of time for the calendar. */
        value?: string | number | Date | null;
        /** Formats day of the week string that appears in the header to specified locale */
        weekdayFormat?: Function | null;
        /** Specifies which days of the week to display. To display Monday through Friday only, a value of `[1, 2, 3, 4, 5]` can be used. To display a week starting on Monday a value of `[1, 2, 3, 4, 5, 6, 0]` can be used. */
        weekdays?: any[] | string | null;
      },
      {
        $scopedSlots: Readonly<{
          /** The content placed in a category header for the `category` type. The category variable is null for events with invalid (non-string) categories. */
          category: (args: {
            date: string;
            time: string;
            year: number;
            month: number;
            day: number;
            hour: number;
            minute: number;
            weekday: number;
            hasDay: boolean;
            hasTime: boolean;
            past: boolean;
            present: boolean;
            future: boolean;
            week: [
              {
                date: string;
                time: string;
                year: number;
                month: number;
                day: number;
                hour: number;
                minute: number;
                weekday: number;
                hasDay: boolean;
                hasTime: boolean;
                past: boolean;
                present: boolean;
                future: boolean;
              }
            ];
            category: string | null;
          }) => VNode[];
          /** The content that is placed in a `week` or `month` view. The day & time object is passed through this slots scope. */
          day: (args: {
            outside: boolean;
            index: number;
            week: [
              {
                date: string;
                time: string;
                year: number;
                month: number;
                day: number;
                hour: number;
                minute: number;
                weekday: number;
                hasDay: boolean;
                hasTime: boolean;
                past: boolean;
                present: boolean;
                future: boolean;
              }
            ];
            date: string;
            time: string;
            year: number;
            month: number;
            day: number;
            hour: number;
            minute: number;
            weekday: number;
            hasDay: boolean;
            hasTime: boolean;
            past: boolean;
            present: boolean;
            future: boolean;
          }) => VNode[];
          /** The content that is placed in a `day` view in the scrollable interval container. The day & time object is passed through this slots scope. */
          "day-body": (args: {
            date: string;
            time: string;
            year: number;
            month: number;
            day: number;
            hour: number;
            minute: number;
            weekday: number;
            hasDay: boolean;
            hasTime: boolean;
            past: boolean;
            present: boolean;
            future: boolean;
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean
            ) => number | false;
            timeDelta: (
              time: string | number | { hour: number; minute: number }
            ) => number | false;
            minutesToPixels: (minutes: number) => number;
            week: [
              {
                date: string;
                time: string;
                year: number;
                month: number;
                day: number;
                hour: number;
                minute: number;
                weekday: number;
                hasDay: boolean;
                hasTime: boolean;
                past: boolean;
                present: boolean;
                future: boolean;
              }
            ];
          }) => VNode[];
          /** The content that is placed in a `day` view in the top container. The day & time object is passed through this slots scope. */
          "day-header": (args: {
            date: string;
            time: string;
            year: number;
            month: number;
            day: number;
            hour: number;
            minute: number;
            weekday: number;
            hasDay: boolean;
            hasTime: boolean;
            past: boolean;
            present: boolean;
            future: boolean;
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean
            ) => number | false;
            timeDelta: (
              time: string | number | { hour: number; minute: number }
            ) => number | false;
            minutesToPixels: (minutes: number) => number;
            week: [
              {
                date: string;
                time: string;
                year: number;
                month: number;
                day: number;
                hour: number;
                minute: number;
                weekday: number;
                hasDay: boolean;
                hasTime: boolean;
                past: boolean;
                present: boolean;
                future: boolean;
              }
            ];
          }) => VNode[];
          /** The content that is placed in the day of the month space in the `custom-weekly` or `month` view. The day & time object is passed through this slots scope. */
          "day-label": (args: {
            date: string;
            time: string;
            year: number;
            month: number;
            day: number;
            hour: number;
            minute: number;
            weekday: number;
            hasDay: boolean;
            hasTime: boolean;
            past: boolean;
            present: boolean;
            future: boolean;
          }) => VNode[];
          /** The content that is placed in the day of the month space in the `week`, `day`, `4day`, or `custom-daily` view. The day & time object is passed through this slots scope. */
          "day-label-header": (args: {
            date: string;
            time: string;
            year: number;
            month: number;
            day: number;
            hour: number;
            minute: number;
            weekday: number;
            hasDay: boolean;
            hasTime: boolean;
            past: boolean;
            present: boolean;
            future: boolean;
          }) => VNode[];
          /** The content that is placed in the month space in the `week` or `month` view. The day & time object is passed through this slots scope. */
          "day-month": (args: {
            date: string;
            time: string;
            year: number;
            month: number;
            day: number;
            hour: number;
            minute: number;
            weekday: number;
            hasDay: boolean;
            hasTime: boolean;
            past: boolean;
            present: boolean;
            future: boolean;
          }) => VNode[];
          /** The content placed in an event. This ignores the `event-name` prop. */
          event: (args: {
            event: any;
            eventParsed: {
              input: any;
              start: {
                date: string;
                time: string;
                year: number;
                month: number;
                day: number;
                hour: number;
                minute: number;
                weekday: number;
                hasDay: boolean;
                hasTime: boolean;
                past: boolean;
                present: boolean;
                future: boolean;
              };
              startIdentifier: number;
              startTimestampIdentifier: number;
              end: {
                date: string;
                time: string;
                year: number;
                month: number;
                day: number;
                hour: number;
                minute: number;
                weekday: number;
                hasDay: boolean;
                hasTime: boolean;
                past: boolean;
                present: boolean;
                future: boolean;
              };
              endIdentifier: number;
              endTimestampIdentifier: number;
              allDay: boolean;
              index: number;
              category: string;
            };
            day: {
              outside: boolean;
              index: number;
              week: [
                {
                  date: string;
                  time: string;
                  year: number;
                  month: number;
                  day: number;
                  hour: number;
                  minute: number;
                  weekday: number;
                  hasDay: boolean;
                  hasTime: boolean;
                  past: boolean;
                  present: boolean;
                  future: boolean;
                }
              ];
              date: string;
              time: string;
              year: number;
              month: number;
              day: number;
              hour: number;
              minute: number;
              weekday: number;
              hasDay: boolean;
              hasTime: boolean;
              past: boolean;
              present: boolean;
              future: boolean;
            };
            outside: boolean;
            start: boolean;
            end: boolean;
            timed: boolean;
            singleline: boolean;
            overlapsNoon: boolean;
            formatTime: (time: VTimestamp, ampm: boolean) => string;
            timeSummary: () => string;
            eventSummary: () => string;
          }) => VNode[];
          /** The content that is placed in the interval space in the `day` view. The day & time object is passed through this slots scope. */
          interval: (args: {
            date: string;
            time: string;
            year: number;
            month: number;
            day: number;
            hour: number;
            minute: number;
            weekday: number;
            hasDay: boolean;
            hasTime: boolean;
            past: boolean;
            present: boolean;
            future: boolean;
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean
            ) => number | false;
            timeDelta: (
              time: string | number | { hour: number; minute: number }
            ) => number | false;
            minutesToPixels: (minutes: number) => number;
            week: [
              {
                date: string;
                time: string;
                year: number;
                month: number;
                day: number;
                hour: number;
                minute: number;
                weekday: number;
                hasDay: boolean;
                hasTime: boolean;
                past: boolean;
                present: boolean;
                future: boolean;
              }
            ];
          }) => VNode[];
        }>;
      },
      {},
      {},
      {},
      {},
      {},
      {
        /** The range of days displayed on the calendar changed. This is triggered on initialization. The event passed is an object with start and end date objects. */
        change: (arg0: {
          start: {
            date: string;
            time: string;
            year: number;
            month: number;
            day: number;
            hour: number;
            minute: number;
            weekday: number;
            hasDay: boolean;
            hasTime: boolean;
            past: boolean;
            present: boolean;
            future: boolean;
          };
          end: {
            date: string;
            time: string;
            year: number;
            month: number;
            day: number;
            hour: number;
            minute: number;
            weekday: number;
            hasDay: boolean;
            hasTime: boolean;
            past: boolean;
            present: boolean;
            future: boolean;
          };
        }) => void;
        /** The click event on the day of the month link. The event passed is the day & time object. Native mouse event is passed as a second argument. */
        "click:date": (
          arg0: {
            date: string;
            time: string;
            year: number;
            month: number;
            day: number;
            hour: number;
            minute: number;
            weekday: number;
            hasDay: boolean;
            hasTime: boolean;
            past: boolean;
            present: boolean;
            future: boolean;
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean
            ) => number | false;
            timeDelta: (
              time: string | number | { hour: number; minute: number }
            ) => number | false;
            minutesToPixels: (minutes: number) => number;
            week: [
              {
                date: string;
                time: string;
                year: number;
                month: number;
                day: number;
                hour: number;
                minute: number;
                weekday: number;
                hasDay: boolean;
                hasTime: boolean;
                past: boolean;
                present: boolean;
                future: boolean;
              }
            ];
          },
          arg1: MouseEvent
        ) => void;
        /** The click event on a day. The event passed is the day object. Native mouse event is passed as a second argument. */
        "click:day": (
          arg0: {
            date: string;
            time: string;
            year: number;
            month: number;
            day: number;
            hour: number;
            minute: number;
            weekday: number;
            hasDay: boolean;
            hasTime: boolean;
            past: boolean;
            present: boolean;
            future: boolean;
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean
            ) => number | false;
            timeDelta: (
              time: string | number | { hour: number; minute: number }
            ) => number | false;
            minutesToPixels: (minutes: number) => number;
            week: [
              {
                date: string;
                time: string;
                year: number;
                month: number;
                day: number;
                hour: number;
                minute: number;
                weekday: number;
                hasDay: boolean;
                hasTime: boolean;
                past: boolean;
                present: boolean;
                future: boolean;
              }
            ];
          },
          arg1: MouseEvent
        ) => void;
        /** The click event on a day in the `category` view. The event passed is the day object. Native mouse event is passed as a second argument. */
        "click:day-category": (
          arg0: {
            date: string;
            time: string;
            year: number;
            month: number;
            day: number;
            hour: number;
            minute: number;
            weekday: number;
            hasDay: boolean;
            hasTime: boolean;
            past: boolean;
            present: boolean;
            future: boolean;
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean
            ) => number | false;
            timeDelta: (
              time: string | number | { hour: number; minute: number }
            ) => number | false;
            minutesToPixels: (minutes: number) => number;
            week: [
              {
                date: string;
                time: string;
                year: number;
                month: number;
                day: number;
                hour: number;
                minute: number;
                weekday: number;
                hasDay: boolean;
                hasTime: boolean;
                past: boolean;
                present: boolean;
                future: boolean;
              }
            ];
          },
          arg1: MouseEvent
        ) => void;
        /** The click event on a specific event. The event passed is the day & time object. */
        "click:event": (arg0: {
          event: any;
          eventParsed: {
            input: any;
            start: {
              date: string;
              time: string;
              year: number;
              month: number;
              day: number;
              hour: number;
              minute: number;
              weekday: number;
              hasDay: boolean;
              hasTime: boolean;
              past: boolean;
              present: boolean;
              future: boolean;
            };
            startIdentifier: number;
            startTimestampIdentifier: number;
            end: {
              date: string;
              time: string;
              year: number;
              month: number;
              day: number;
              hour: number;
              minute: number;
              weekday: number;
              hasDay: boolean;
              hasTime: boolean;
              past: boolean;
              present: boolean;
              future: boolean;
            };
            endIdentifier: number;
            endTimestampIdentifier: number;
            allDay: boolean;
            index: number;
            category: string;
          };
          day: {
            outside: boolean;
            index: number;
            week: [
              {
                date: string;
                time: string;
                year: number;
                month: number;
                day: number;
                hour: number;
                minute: number;
                weekday: number;
                hasDay: boolean;
                hasTime: boolean;
                past: boolean;
                present: boolean;
                future: boolean;
              }
            ];
            date: string;
            time: string;
            year: number;
            month: number;
            day: number;
            hour: number;
            minute: number;
            weekday: number;
            hasDay: boolean;
            hasTime: boolean;
            past: boolean;
            present: boolean;
            future: boolean;
          };
          outside: boolean;
          start: boolean;
          end: boolean;
          timed: boolean;
          singleline: boolean;
          overlapsNoon: boolean;
          formatTime: (time: VTimestamp, ampm: boolean) => string;
          timeSummary: () => string;
          eventSummary: () => string;
          nativeEvent: MouseEvent | TouchEvent;
        }) => void;
        /** The click event at a specific interval label in the `day` view. The event passed is the day & time object. Native mouse event is passed as a second argument. */
        "click:interval": (
          arg0: {
            date: string;
            time: string;
            year: number;
            month: number;
            day: number;
            hour: number;
            minute: number;
            weekday: number;
            hasDay: boolean;
            hasTime: boolean;
            past: boolean;
            present: boolean;
            future: boolean;
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean
            ) => number | false;
            timeDelta: (
              time: string | number | { hour: number; minute: number }
            ) => number | false;
            minutesToPixels: (minutes: number) => number;
            week: [
              {
                date: string;
                time: string;
                year: number;
                month: number;
                day: number;
                hour: number;
                minute: number;
                weekday: number;
                hasDay: boolean;
                hasTime: boolean;
                past: boolean;
                present: boolean;
                future: boolean;
              }
            ];
          },
          arg1: MouseEvent
        ) => void;
        /** The click event on the `X more` button on views with too many events in a day. Native mouse event is passed as a second argument. */
        "click:more": (
          arg0: {
            date: string;
            time: string;
            year: number;
            month: number;
            day: number;
            hour: number;
            minute: number;
            weekday: number;
            hasDay: boolean;
            hasTime: boolean;
            past: boolean;
            present: boolean;
            future: boolean;
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean
            ) => number | false;
            timeDelta: (
              time: string | number | { hour: number; minute: number }
            ) => number | false;
            minutesToPixels: (minutes: number) => number;
            week: [
              {
                date: string;
                time: string;
                year: number;
                month: number;
                day: number;
                hour: number;
                minute: number;
                weekday: number;
                hasDay: boolean;
                hasTime: boolean;
                past: boolean;
                present: boolean;
                future: boolean;
              }
            ];
          },
          arg1: MouseEvent
        ) => void;
        /** The click event at a specific time in the `day` view. The event passed is the day & time object. Native mouse event is passed as a second argument. */
        "click:time": (
          arg0: {
            date: string;
            time: string;
            year: number;
            month: number;
            day: number;
            hour: number;
            minute: number;
            weekday: number;
            hasDay: boolean;
            hasTime: boolean;
            past: boolean;
            present: boolean;
            future: boolean;
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean
            ) => number | false;
            timeDelta: (
              time: string | number | { hour: number; minute: number }
            ) => number | false;
            minutesToPixels: (minutes: number) => number;
            week: [
              {
                date: string;
                time: string;
                year: number;
                month: number;
                day: number;
                hour: number;
                minute: number;
                weekday: number;
                hasDay: boolean;
                hasTime: boolean;
                past: boolean;
                present: boolean;
                future: boolean;
              }
            ];
          },
          arg1: MouseEvent
        ) => void;
        /** The click event at a specific time in the `category` view. The event passed is the day & time object. Native mouse event is passed as a second argument. */
        "click:time-category": (
          arg0: {
            date: string;
            time: string;
            year: number;
            month: number;
            day: number;
            hour: number;
            minute: number;
            weekday: number;
            hasDay: boolean;
            hasTime: boolean;
            past: boolean;
            present: boolean;
            future: boolean;
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean
            ) => number | false;
            timeDelta: (
              time: string | number | { hour: number; minute: number }
            ) => number | false;
            minutesToPixels: (minutes: number) => number;
            week: [
              {
                date: string;
                time: string;
                year: number;
                month: number;
                day: number;
                hour: number;
                minute: number;
                weekday: number;
                hasDay: boolean;
                hasTime: boolean;
                past: boolean;
                present: boolean;
                future: boolean;
              }
            ];
          },
          arg1: MouseEvent
        ) => void;
        // /** The right-click event on the day of the month link. The event passed is the day & time object. Native mouse event is passed as a second argument. */
        "contextmenu:date": (
          arg0: {
            date: string;
            time: string;
            year: number;
            month: number;
            day: number;
            hour: number;
            minute: number;
            weekday: number;
            hasDay: boolean;
            hasTime: boolean;
            past: boolean;
            present: boolean;
            future: boolean;
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean
            ) => number | false;
            timeDelta: (
              time: string | number | { hour: number; minute: number }
            ) => number | false;
            minutesToPixels: (minutes: number) => number;
            week: [
              {
                date: string;
                time: string;
                year: number;
                month: number;
                day: number;
                hour: number;
                minute: number;
                weekday: number;
                hasDay: boolean;
                hasTime: boolean;
                past: boolean;
                present: boolean;
                future: boolean;
              }
            ];
          },
          arg1: MouseEvent
        ) => void;
        /** The right-click event on a day. The event passed is the day object. Native mouse event is passed as a second argument. */
        "contextmenu:day": (
          arg0: {
            date: string;
            time: string;
            year: number;
            month: number;
            day: number;
            hour: number;
            minute: number;
            weekday: number;
            hasDay: boolean;
            hasTime: boolean;
            past: boolean;
            present: boolean;
            future: boolean;
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean
            ) => number | false;
            timeDelta: (
              time: string | number | { hour: number; minute: number }
            ) => number | false;
            minutesToPixels: (minutes: number) => number;
            week: [
              {
                date: string;
                time: string;
                year: number;
                month: number;
                day: number;
                hour: number;
                minute: number;
                weekday: number;
                hasDay: boolean;
                hasTime: boolean;
                past: boolean;
                present: boolean;
                future: boolean;
              }
            ];
          },
          arg1: MouseEvent
        ) => void;
        // /** The right-click event on a day in the `category` view. The event passed is the day object. Native mouse event is passed as a second argument. */
        "contextmenu:day-category": (
          arg0: {
            date: string;
            time: string;
            year: number;
            month: number;
            day: number;
            hour: number;
            minute: number;
            weekday: number;
            hasDay: boolean;
            hasTime: boolean;
            past: boolean;
            present: boolean;
            future: boolean;
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean
            ) => number | false;
            timeDelta: (
              time: string | number | { hour: number; minute: number }
            ) => number | false;
            minutesToPixels: (minutes: number) => number;
            week: [
              {
                date: string;
                time: string;
                year: number;
                month: number;
                day: number;
                hour: number;
                minute: number;
                weekday: number;
                hasDay: boolean;
                hasTime: boolean;
                past: boolean;
                present: boolean;
                future: boolean;
              }
            ];
          },
          arg1: MouseEvent
        ) => void;
        /** The right-click event on an event. The event passed is the day & time object. */
        "contextmenu:event": (arg0: {
          event: any;
          eventParsed: {
            input: any;
            start: {
              date: string;
              time: string;
              year: number;
              month: number;
              day: number;
              hour: number;
              minute: number;
              weekday: number;
              hasDay: boolean;
              hasTime: boolean;
              past: boolean;
              present: boolean;
              future: boolean;
            };
            startIdentifier: number;
            startTimestampIdentifier: number;
            end: {
              date: string;
              time: string;
              year: number;
              month: number;
              day: number;
              hour: number;
              minute: number;
              weekday: number;
              hasDay: boolean;
              hasTime: boolean;
              past: boolean;
              present: boolean;
              future: boolean;
            };
            endIdentifier: number;
            endTimestampIdentifier: number;
            allDay: boolean;
            index: number;
            category: string;
          };
          day: {
            outside: boolean;
            index: number;
            week: [
              {
                date: string;
                time: string;
                year: number;
                month: number;
                day: number;
                hour: number;
                minute: number;
                weekday: number;
                hasDay: boolean;
                hasTime: boolean;
                past: boolean;
                present: boolean;
                future: boolean;
              }
            ];
            date: string;
            time: string;
            year: number;
            month: number;
            day: number;
            hour: number;
            minute: number;
            weekday: number;
            hasDay: boolean;
            hasTime: boolean;
            past: boolean;
            present: boolean;
            future: boolean;
          };
          outside: boolean;
          start: boolean;
          end: boolean;
          timed: boolean;
          singleline: boolean;
          overlapsNoon: boolean;
          formatTime: (time: VTimestamp, ampm: boolean) => string;
          timeSummary: () => string;
          eventSummary: () => string;
          nativeEvent: MouseEvent | TouchEvent;
        }) => void;
        /** The right-click event at a specific interval label in the `day` view. The event passed is the day & time object. Native mouse event is passed as a second argument. */
        "contextmenu:interval": (
          arg0: {
            date: string;
            time: string;
            year: number;
            month: number;
            day: number;
            hour: number;
            minute: number;
            weekday: number;
            hasDay: boolean;
            hasTime: boolean;
            past: boolean;
            present: boolean;
            future: boolean;
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean
            ) => number | false;
            timeDelta: (
              time: string | number | { hour: number; minute: number }
            ) => number | false;
            minutesToPixels: (minutes: number) => number;
            week: [
              {
                date: string;
                time: string;
                year: number;
                month: number;
                day: number;
                hour: number;
                minute: number;
                weekday: number;
                hasDay: boolean;
                hasTime: boolean;
                past: boolean;
                present: boolean;
                future: boolean;
              }
            ];
          },
          arg1: MouseEvent
        ) => void;
        /** The right-click event at a specific time in the `day` view. The event passed is the day & time object. Native mouse event is passed as a second argument. */
        "contextmenu:time": (
          arg0: {
            date: string;
            time: string;
            year: number;
            month: number;
            day: number;
            hour: number;
            minute: number;
            weekday: number;
            hasDay: boolean;
            hasTime: boolean;
            past: boolean;
            present: boolean;
            future: boolean;
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean
            ) => number | false;
            timeDelta: (
              time: string | number | { hour: number; minute: number }
            ) => number | false;
            minutesToPixels: (minutes: number) => number;
            week: [
              {
                date: string;
                time: string;
                year: number;
                month: number;
                day: number;
                hour: number;
                minute: number;
                weekday: number;
                hasDay: boolean;
                hasTime: boolean;
                past: boolean;
                present: boolean;
                future: boolean;
              }
            ];
          },
          arg1: MouseEvent
        ) => void;
        /** The right-click event at a specific time in the `category` view. The event passed is the day & time object. Native mouse event is passed as a second argument. */
        "contextmenu:time-category": (
          arg0: {
            date: string;
            time: string;
            year: number;
            month: number;
            day: number;
            hour: number;
            minute: number;
            weekday: number;
            hasDay: boolean;
            hasTime: boolean;
            past: boolean;
            present: boolean;
            future: boolean;
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean
            ) => number | false;
            timeDelta: (
              time: string | number | { hour: number; minute: number }
            ) => number | false;
            minutesToPixels: (minutes: number) => number;
            week: [
              {
                date: string;
                time: string;
                year: number;
                month: number;
                day: number;
                hour: number;
                minute: number;
                weekday: number;
                hasDay: boolean;
                hasTime: boolean;
                past: boolean;
                present: boolean;
                future: boolean;
              }
            ];
          },
          arg1: MouseEvent
        ) => void;
        /** An alias to the `click:date` event used to support v-model. */
        input: (arg0: {
          date: string;
          time: string;
          year: number;
          month: number;
          day: number;
          hour: number;
          minute: number;
          weekday: number;
          hasDay: boolean;
          hasTime: boolean;
          past: boolean;
          present: boolean;
          future: boolean;
        }) => void;
        /** The mousedown event on a day. The event passed is the day object. Native mouse event is passed as a second argument. */
        "mousedown:day": (
          arg0: {
            date: string;
            time: string;
            year: number;
            month: number;
            day: number;
            hour: number;
            minute: number;
            weekday: number;
            hasDay: boolean;
            hasTime: boolean;
            past: boolean;
            present: boolean;
            future: boolean;
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean
            ) => number | false;
            timeDelta: (
              time: string | number | { hour: number; minute: number }
            ) => number | false;
            minutesToPixels: (minutes: number) => number;
            week: [
              {
                date: string;
                time: string;
                year: number;
                month: number;
                day: number;
                hour: number;
                minute: number;
                weekday: number;
                hasDay: boolean;
                hasTime: boolean;
                past: boolean;
                present: boolean;
                future: boolean;
              }
            ];
          },
          arg1: MouseEvent
        ) => void;
        /** The mousedown event on a day in the `category` view. The event passed is the day object. Native mouse event is passed as a second argument. */
        "mousedown:day-category": (
          arg0: {
            date: string;
            time: string;
            year: number;
            month: number;
            day: number;
            hour: number;
            minute: number;
            weekday: number;
            hasDay: boolean;
            hasTime: boolean;
            past: boolean;
            present: boolean;
            future: boolean;
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean
            ) => number | false;
            timeDelta: (
              time: string | number | { hour: number; minute: number }
            ) => number | false;
            minutesToPixels: (minutes: number) => number;
            week: [
              {
                date: string;
                time: string;
                year: number;
                month: number;
                day: number;
                hour: number;
                minute: number;
                weekday: number;
                hasDay: boolean;
                hasTime: boolean;
                past: boolean;
                present: boolean;
                future: boolean;
              }
            ];
          },
          arg1: MouseEvent
        ) => void;
        /** The mousedown event on an event. The event passed is the day & time object. */
        "mousedown:event": (arg0: {
          event: any;
          eventParsed: {
            input: any;
            start: {
              date: string;
              time: string;
              year: number;
              month: number;
              day: number;
              hour: number;
              minute: number;
              weekday: number;
              hasDay: boolean;
              hasTime: boolean;
              past: boolean;
              present: boolean;
              future: boolean;
            };
            startIdentifier: number;
            startTimestampIdentifier: number;
            end: {
              date: string;
              time: string;
              year: number;
              month: number;
              day: number;
              hour: number;
              minute: number;
              weekday: number;
              hasDay: boolean;
              hasTime: boolean;
              past: boolean;
              present: boolean;
              future: boolean;
            };
            endIdentifier: number;
            endTimestampIdentifier: number;
            allDay: boolean;
            index: number;
            category: string;
          };
          day: {
            outside: boolean;
            index: number;
            week: [
              {
                date: string;
                time: string;
                year: number;
                month: number;
                day: number;
                hour: number;
                minute: number;
                weekday: number;
                hasDay: boolean;
                hasTime: boolean;
                past: boolean;
                present: boolean;
                future: boolean;
              }
            ];
            date: string;
            time: string;
            year: number;
            month: number;
            day: number;
            hour: number;
            minute: number;
            weekday: number;
            hasDay: boolean;
            hasTime: boolean;
            past: boolean;
            present: boolean;
            future: boolean;
          };
          outside: boolean;
          start: boolean;
          end: boolean;
          timed: boolean;
          singleline: boolean;
          overlapsNoon: boolean;
          formatTime: (time: VTimestamp, ampm: boolean) => string;
          timeSummary: () => string;
          eventSummary: () => string;
          nativeEvent: MouseEvent | TouchEvent;
        }) => void;
        /** The mousedown event at a specific interval label in the `day` view. The event passed is the day & time object. Native mouse event is passed as a second argument. */
        "mousedown:interval": (
          arg0: {
            date: string;
            time: string;
            year: number;
            month: number;
            day: number;
            hour: number;
            minute: number;
            weekday: number;
            hasDay: boolean;
            hasTime: boolean;
            past: boolean;
            present: boolean;
            future: boolean;
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean
            ) => number | false;
            timeDelta: (
              time: string | number | { hour: number; minute: number }
            ) => number | false;
            minutesToPixels: (minutes: number) => number;
            week: [
              {
                date: string;
                time: string;
                year: number;
                month: number;
                day: number;
                hour: number;
                minute: number;
                weekday: number;
                hasDay: boolean;
                hasTime: boolean;
                past: boolean;
                present: boolean;
                future: boolean;
              }
            ];
          },
          arg1: MouseEvent
        ) => void;
        /** The mousedown event at a specific time in the `day` view. The event passed is the day & time object. Native mouse event is passed as a second argument. */
        "mousedown:time": (
          arg0: {
            date: string;
            time: string;
            year: number;
            month: number;
            day: number;
            hour: number;
            minute: number;
            weekday: number;
            hasDay: boolean;
            hasTime: boolean;
            past: boolean;
            present: boolean;
            future: boolean;
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean
            ) => number | false;
            timeDelta: (
              time: string | number | { hour: number; minute: number }
            ) => number | false;
            minutesToPixels: (minutes: number) => number;
            week: [
              {
                date: string;
                time: string;
                year: number;
                month: number;
                day: number;
                hour: number;
                minute: number;
                weekday: number;
                hasDay: boolean;
                hasTime: boolean;
                past: boolean;
                present: boolean;
                future: boolean;
              }
            ];
          },
          arg1: MouseEvent
        ) => void;
        /** The mousedown event at a specific time in the `category` view. The event passed is the day & time object. Native mouse event is passed as a second argument. */
        "mousedown:time-category": (
          arg0: {
            date: string;
            time: string;
            year: number;
            month: number;
            day: number;
            hour: number;
            minute: number;
            weekday: number;
            hasDay: boolean;
            hasTime: boolean;
            past: boolean;
            present: boolean;
            future: boolean;
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean
            ) => number | false;
            timeDelta: (
              time: string | number | { hour: number; minute: number }
            ) => number | false;
            minutesToPixels: (minutes: number) => number;
            week: [
              {
                date: string;
                time: string;
                year: number;
                month: number;
                day: number;
                hour: number;
                minute: number;
                weekday: number;
                hasDay: boolean;
                hasTime: boolean;
                past: boolean;
                present: boolean;
                future: boolean;
              }
            ];
          },
          arg1: MouseEvent
        ) => void;
        /** The mouseenter event on a day. The event passed is the day object. Native mouse event is passed as a second argument. */
        "mouseenter:day": (
          arg0: {
            date: string;
            time: string;
            year: number;
            month: number;
            day: number;
            hour: number;
            minute: number;
            weekday: number;
            hasDay: boolean;
            hasTime: boolean;
            past: boolean;
            present: boolean;
            future: boolean;
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean
            ) => number | false;
            timeDelta: (
              time: string | number | { hour: number; minute: number }
            ) => number | false;
            minutesToPixels: (minutes: number) => number;
            week: [
              {
                date: string;
                time: string;
                year: number;
                month: number;
                day: number;
                hour: number;
                minute: number;
                weekday: number;
                hasDay: boolean;
                hasTime: boolean;
                past: boolean;
                present: boolean;
                future: boolean;
              }
            ];
          },
          arg1: MouseEvent
        ) => void;
        /** The mouseenter event on a day in the `category` view. The event passed is the day object. Native mouse event is passed as a second argument. */
        "mouseenter:day-category": (
          arg0: {
            date: string;
            time: string;
            year: number;
            month: number;
            day: number;
            hour: number;
            minute: number;
            weekday: number;
            hasDay: boolean;
            hasTime: boolean;
            past: boolean;
            present: boolean;
            future: boolean;
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean
            ) => number | false;
            timeDelta: (
              time: string | number | { hour: number; minute: number }
            ) => number | false;
            minutesToPixels: (minutes: number) => number;
            week: [
              {
                date: string;
                time: string;
                year: number;
                month: number;
                day: number;
                hour: number;
                minute: number;
                weekday: number;
                hasDay: boolean;
                hasTime: boolean;
                past: boolean;
                present: boolean;
                future: boolean;
              }
            ];
          },
          arg1: MouseEvent
        ) => void;
        /** The mouseenter event on an event. The event passed is the day & time object. */
        "mouseenter:event": (arg0: {
          event: any;
          eventParsed: {
            input: any;
            start: {
              date: string;
              time: string;
              year: number;
              month: number;
              day: number;
              hour: number;
              minute: number;
              weekday: number;
              hasDay: boolean;
              hasTime: boolean;
              past: boolean;
              present: boolean;
              future: boolean;
            };
            startIdentifier: number;
            startTimestampIdentifier: number;
            end: {
              date: string;
              time: string;
              year: number;
              month: number;
              day: number;
              hour: number;
              minute: number;
              weekday: number;
              hasDay: boolean;
              hasTime: boolean;
              past: boolean;
              present: boolean;
              future: boolean;
            };
            endIdentifier: number;
            endTimestampIdentifier: number;
            allDay: boolean;
            index: number;
            category: string;
          };
          day: {
            outside: boolean;
            index: number;
            week: [
              {
                date: string;
                time: string;
                year: number;
                month: number;
                day: number;
                hour: number;
                minute: number;
                weekday: number;
                hasDay: boolean;
                hasTime: boolean;
                past: boolean;
                present: boolean;
                future: boolean;
              }
            ];
            date: string;
            time: string;
            year: number;
            month: number;
            day: number;
            hour: number;
            minute: number;
            weekday: number;
            hasDay: boolean;
            hasTime: boolean;
            past: boolean;
            present: boolean;
            future: boolean;
          };
          outside: boolean;
          start: boolean;
          end: boolean;
          timed: boolean;
          singleline: boolean;
          overlapsNoon: boolean;
          formatTime: (time: VTimestamp, ampm: boolean) => string;
          timeSummary: () => string;
          eventSummary: () => string;
          nativeEvent: MouseEvent | TouchEvent;
        }) => void;
        /** The mouseenter event at a specific interval label in the `day` view. The event passed is the day & time object. Native mouse event is passed as a second argument. */
        "mouseenter:interval": (
          arg0: {
            date: string;
            time: string;
            year: number;
            month: number;
            day: number;
            hour: number;
            minute: number;
            weekday: number;
            hasDay: boolean;
            hasTime: boolean;
            past: boolean;
            present: boolean;
            future: boolean;
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean
            ) => number | false;
            timeDelta: (
              time: string | number | { hour: number; minute: number }
            ) => number | false;
            minutesToPixels: (minutes: number) => number;
            week: [
              {
                date: string;
                time: string;
                year: number;
                month: number;
                day: number;
                hour: number;
                minute: number;
                weekday: number;
                hasDay: boolean;
                hasTime: boolean;
                past: boolean;
                present: boolean;
                future: boolean;
              }
            ];
          },
          arg1: MouseEvent
        ) => void;
        /** The mouseenter event at a specific time in the `day` view. The event passed is the day & time object. Native mouse event is passed as a second argument. */
        "mouseenter:time": (
          arg0: {
            date: string;
            time: string;
            year: number;
            month: number;
            day: number;
            hour: number;
            minute: number;
            weekday: number;
            hasDay: boolean;
            hasTime: boolean;
            past: boolean;
            present: boolean;
            future: boolean;
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean
            ) => number | false;
            timeDelta: (
              time: string | number | { hour: number; minute: number }
            ) => number | false;
            minutesToPixels: (minutes: number) => number;
            week: [
              {
                date: string;
                time: string;
                year: number;
                month: number;
                day: number;
                hour: number;
                minute: number;
                weekday: number;
                hasDay: boolean;
                hasTime: boolean;
                past: boolean;
                present: boolean;
                future: boolean;
              }
            ];
          },
          arg1: MouseEvent
        ) => void;
        /** The mouseenter event at a specific time in the `category` view. The event passed is the day & time object. Native mouse event is passed as a second argument. */
        "mouseenter:time-category": (
          arg0: {
            date: string;
            time: string;
            year: number;
            month: number;
            day: number;
            hour: number;
            minute: number;
            weekday: number;
            hasDay: boolean;
            hasTime: boolean;
            past: boolean;
            present: boolean;
            future: boolean;
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean
            ) => number | false;
            timeDelta: (
              time: string | number | { hour: number; minute: number }
            ) => number | false;
            minutesToPixels: (minutes: number) => number;
            week: [
              {
                date: string;
                time: string;
                year: number;
                month: number;
                day: number;
                hour: number;
                minute: number;
                weekday: number;
                hasDay: boolean;
                hasTime: boolean;
                past: boolean;
                present: boolean;
                future: boolean;
              }
            ];
          },
          arg1: MouseEvent
        ) => void;
        /** The mouseleave event on a day. The event passed is the day object. Native mouse event is passed as a second argument. */
        "mouseleave:day": (
          arg0: {
            date: string;
            time: string;
            year: number;
            month: number;
            day: number;
            hour: number;
            minute: number;
            weekday: number;
            hasDay: boolean;
            hasTime: boolean;
            past: boolean;
            present: boolean;
            future: boolean;
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean
            ) => number | false;
            timeDelta: (
              time: string | number | { hour: number; minute: number }
            ) => number | false;
            minutesToPixels: (minutes: number) => number;
            week: [
              {
                date: string;
                time: string;
                year: number;
                month: number;
                day: number;
                hour: number;
                minute: number;
                weekday: number;
                hasDay: boolean;
                hasTime: boolean;
                past: boolean;
                present: boolean;
                future: boolean;
              }
            ];
          },
          arg1: MouseEvent
        ) => void;
        /** The mouseleave event on a day in the `category` view. The event passed is the day object. Native mouse event is passed as a second argument. */
        "mouseleave:day-category": (
          arg0: {
            date: string;
            time: string;
            year: number;
            month: number;
            day: number;
            hour: number;
            minute: number;
            weekday: number;
            hasDay: boolean;
            hasTime: boolean;
            past: boolean;
            present: boolean;
            future: boolean;
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean
            ) => number | false;
            timeDelta: (
              time: string | number | { hour: number; minute: number }
            ) => number | false;
            minutesToPixels: (minutes: number) => number;
            week: [
              {
                date: string;
                time: string;
                year: number;
                month: number;
                day: number;
                hour: number;
                minute: number;
                weekday: number;
                hasDay: boolean;
                hasTime: boolean;
                past: boolean;
                present: boolean;
                future: boolean;
              }
            ];
          },
          arg1: MouseEvent
        ) => void;
        /** The mouseleave event on an event. The event passed is the day & time object. */
        "mouseleave:event": (arg0: {
          event: any;
          eventParsed: {
            input: any;
            start: {
              date: string;
              time: string;
              year: number;
              month: number;
              day: number;
              hour: number;
              minute: number;
              weekday: number;
              hasDay: boolean;
              hasTime: boolean;
              past: boolean;
              present: boolean;
              future: boolean;
            };
            startIdentifier: number;
            startTimestampIdentifier: number;
            end: {
              date: string;
              time: string;
              year: number;
              month: number;
              day: number;
              hour: number;
              minute: number;
              weekday: number;
              hasDay: boolean;
              hasTime: boolean;
              past: boolean;
              present: boolean;
              future: boolean;
            };
            endIdentifier: number;
            endTimestampIdentifier: number;
            allDay: boolean;
            index: number;
            category: string;
          };
          day: {
            outside: boolean;
            index: number;
            week: [
              {
                date: string;
                time: string;
                year: number;
                month: number;
                day: number;
                hour: number;
                minute: number;
                weekday: number;
                hasDay: boolean;
                hasTime: boolean;
                past: boolean;
                present: boolean;
                future: boolean;
              }
            ];
            date: string;
            time: string;
            year: number;
            month: number;
            day: number;
            hour: number;
            minute: number;
            weekday: number;
            hasDay: boolean;
            hasTime: boolean;
            past: boolean;
            present: boolean;
            future: boolean;
          };
          outside: boolean;
          start: boolean;
          end: boolean;
          timed: boolean;
          singleline: boolean;
          overlapsNoon: boolean;
          formatTime: (time: VTimestamp, ampm: boolean) => string;
          timeSummary: () => string;
          eventSummary: () => string;
          nativeEvent: MouseEvent | TouchEvent;
        }) => void;
        /** The mouseleave event at a specific interval label in the `day` view. The event passed is the day & time object. Native mouse event is passed as a second argument. */
        "mouseleave:interval": (
          arg0: {
            date: string;
            time: string;
            year: number;
            month: number;
            day: number;
            hour: number;
            minute: number;
            weekday: number;
            hasDay: boolean;
            hasTime: boolean;
            past: boolean;
            present: boolean;
            future: boolean;
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean
            ) => number | false;
            timeDelta: (
              time: string | number | { hour: number; minute: number }
            ) => number | false;
            minutesToPixels: (minutes: number) => number;
            week: [
              {
                date: string;
                time: string;
                year: number;
                month: number;
                day: number;
                hour: number;
                minute: number;
                weekday: number;
                hasDay: boolean;
                hasTime: boolean;
                past: boolean;
                present: boolean;
                future: boolean;
              }
            ];
          },
          arg1: MouseEvent
        ) => void;
        /** The mouseleave event at a specific time in the `day` view. The event passed is the day & time object. Native mouse event is passed as a second argument. */
        "mouseleave:time": (
          arg0: {
            date: string;
            time: string;
            year: number;
            month: number;
            day: number;
            hour: number;
            minute: number;
            weekday: number;
            hasDay: boolean;
            hasTime: boolean;
            past: boolean;
            present: boolean;
            future: boolean;
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean
            ) => number | false;
            timeDelta: (
              time: string | number | { hour: number; minute: number }
            ) => number | false;
            minutesToPixels: (minutes: number) => number;
            week: [
              {
                date: string;
                time: string;
                year: number;
                month: number;
                day: number;
                hour: number;
                minute: number;
                weekday: number;
                hasDay: boolean;
                hasTime: boolean;
                past: boolean;
                present: boolean;
                future: boolean;
              }
            ];
          },
          arg1: MouseEvent
        ) => void;
        /** The mouseleave event at a specific time in the `category` view. The event passed is the day & time object. Native mouse event is passed as a second argument. */
        "mouseleave:time-category": (
          arg0: {
            date: string;
            time: string;
            year: number;
            month: number;
            day: number;
            hour: number;
            minute: number;
            weekday: number;
            hasDay: boolean;
            hasTime: boolean;
            past: boolean;
            present: boolean;
            future: boolean;
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean
            ) => number | false;
            timeDelta: (
              time: string | number | { hour: number; minute: number }
            ) => number | false;
            minutesToPixels: (minutes: number) => number;
            week: [
              {
                date: string;
                time: string;
                year: number;
                month: number;
                day: number;
                hour: number;
                minute: number;
                weekday: number;
                hasDay: boolean;
                hasTime: boolean;
                past: boolean;
                present: boolean;
                future: boolean;
              }
            ];
          },
          arg1: MouseEvent
        ) => void;
        /** The mousemove event on a day. The event passed is the day object. Native mouse event is passed as a second argument. */
        "mousemove:day": (
          arg0: {
            date: string;
            time: string;
            year: number;
            month: number;
            day: number;
            hour: number;
            minute: number;
            weekday: number;
            hasDay: boolean;
            hasTime: boolean;
            past: boolean;
            present: boolean;
            future: boolean;
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean
            ) => number | false;
            timeDelta: (
              time: string | number | { hour: number; minute: number }
            ) => number | false;
            minutesToPixels: (minutes: number) => number;
            week: [
              {
                date: string;
                time: string;
                year: number;
                month: number;
                day: number;
                hour: number;
                minute: number;
                weekday: number;
                hasDay: boolean;
                hasTime: boolean;
                past: boolean;
                present: boolean;
                future: boolean;
              }
            ];
          },
          arg1: MouseEvent
        ) => void;
        /** The mousemove event on a day in the `category` view. The event passed is the day object. Native mouse event is passed as a second argument. */
        "mousemove:day-category": (
          arg0: {
            date: string;
            time: string;
            year: number;
            month: number;
            day: number;
            hour: number;
            minute: number;
            weekday: number;
            hasDay: boolean;
            hasTime: boolean;
            past: boolean;
            present: boolean;
            future: boolean;
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean
            ) => number | false;
            timeDelta: (
              time: string | number | { hour: number; minute: number }
            ) => number | false;
            minutesToPixels: (minutes: number) => number;
            week: [
              {
                date: string;
                time: string;
                year: number;
                month: number;
                day: number;
                hour: number;
                minute: number;
                weekday: number;
                hasDay: boolean;
                hasTime: boolean;
                past: boolean;
                present: boolean;
                future: boolean;
              }
            ];
          },
          arg1: MouseEvent
        ) => void;
        /** The mousemove event on an event. The event passed is the day & time object. */
        "mousemove:event": (arg0: {
          event: any;
          eventParsed: {
            input: any;
            start: {
              date: string;
              time: string;
              year: number;
              month: number;
              day: number;
              hour: number;
              minute: number;
              weekday: number;
              hasDay: boolean;
              hasTime: boolean;
              past: boolean;
              present: boolean;
              future: boolean;
            };
            startIdentifier: number;
            startTimestampIdentifier: number;
            end: {
              date: string;
              time: string;
              year: number;
              month: number;
              day: number;
              hour: number;
              minute: number;
              weekday: number;
              hasDay: boolean;
              hasTime: boolean;
              past: boolean;
              present: boolean;
              future: boolean;
            };
            endIdentifier: number;
            endTimestampIdentifier: number;
            allDay: boolean;
            index: number;
            category: string;
          };
          day: {
            outside: boolean;
            index: number;
            week: [
              {
                date: string;
                time: string;
                year: number;
                month: number;
                day: number;
                hour: number;
                minute: number;
                weekday: number;
                hasDay: boolean;
                hasTime: boolean;
                past: boolean;
                present: boolean;
                future: boolean;
              }
            ];
            date: string;
            time: string;
            year: number;
            month: number;
            day: number;
            hour: number;
            minute: number;
            weekday: number;
            hasDay: boolean;
            hasTime: boolean;
            past: boolean;
            present: boolean;
            future: boolean;
          };
          outside: boolean;
          start: boolean;
          end: boolean;
          timed: boolean;
          singleline: boolean;
          overlapsNoon: boolean;
          formatTime: (time: VTimestamp, ampm: boolean) => string;
          timeSummary: () => string;
          eventSummary: () => string;
          nativeEvent: MouseEvent | TouchEvent;
        }) => void;
        /** The mousemove event at a specific interval label in the `day` view. The event passed is the day & time object. Native mouse event is passed as a second argument. */
        "mousemove:interval": (
          arg0: {
            date: string;
            time: string;
            year: number;
            month: number;
            day: number;
            hour: number;
            minute: number;
            weekday: number;
            hasDay: boolean;
            hasTime: boolean;
            past: boolean;
            present: boolean;
            future: boolean;
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean
            ) => number | false;
            timeDelta: (
              time: string | number | { hour: number; minute: number }
            ) => number | false;
            minutesToPixels: (minutes: number) => number;
            week: [
              {
                date: string;
                time: string;
                year: number;
                month: number;
                day: number;
                hour: number;
                minute: number;
                weekday: number;
                hasDay: boolean;
                hasTime: boolean;
                past: boolean;
                present: boolean;
                future: boolean;
              }
            ];
          },
          arg1: MouseEvent
        ) => void;
        /** The mousemove event at a specific time in the `day` view. The event passed is the day & time object. Native mouse event is passed as a second argument. */
        "mousemove:time": (
          arg0: {
            date: string;
            time: string;
            year: number;
            month: number;
            day: number;
            hour: number;
            minute: number;
            weekday: number;
            hasDay: boolean;
            hasTime: boolean;
            past: boolean;
            present: boolean;
            future: boolean;
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean
            ) => number | false;
            timeDelta: (
              time: string | number | { hour: number; minute: number }
            ) => number | false;
            minutesToPixels: (minutes: number) => number;
            week: [
              {
                date: string;
                time: string;
                year: number;
                month: number;
                day: number;
                hour: number;
                minute: number;
                weekday: number;
                hasDay: boolean;
                hasTime: boolean;
                past: boolean;
                present: boolean;
                future: boolean;
              }
            ];
          },
          arg1: MouseEvent
        ) => void;
        /** The mousemove event at a specific time in the `category` view. The event passed is the day & time object. Native mouse event is passed as a second argument. */
        "mousemove:time-category": (
          arg0: {
            date: string;
            time: string;
            year: number;
            month: number;
            day: number;
            hour: number;
            minute: number;
            weekday: number;
            hasDay: boolean;
            hasTime: boolean;
            past: boolean;
            present: boolean;
            future: boolean;
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean
            ) => number | false;
            timeDelta: (
              time: string | number | { hour: number; minute: number }
            ) => number | false;
            minutesToPixels: (minutes: number) => number;
            week: [
              {
                date: string;
                time: string;
                year: number;
                month: number;
                day: number;
                hour: number;
                minute: number;
                weekday: number;
                hasDay: boolean;
                hasTime: boolean;
                past: boolean;
                present: boolean;
                future: boolean;
              }
            ];
          },
          arg1: MouseEvent
        ) => void;
        /** The mouseup event on a day. The event passed is the day object. Native mouse event is passed as a second argument. */
        "mouseup:day": (
          arg0: {
            date: string;
            time: string;
            year: number;
            month: number;
            day: number;
            hour: number;
            minute: number;
            weekday: number;
            hasDay: boolean;
            hasTime: boolean;
            past: boolean;
            present: boolean;
            future: boolean;
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean
            ) => number | false;
            timeDelta: (
              time: string | number | { hour: number; minute: number }
            ) => number | false;
            minutesToPixels: (minutes: number) => number;
            week: [
              {
                date: string;
                time: string;
                year: number;
                month: number;
                day: number;
                hour: number;
                minute: number;
                weekday: number;
                hasDay: boolean;
                hasTime: boolean;
                past: boolean;
                present: boolean;
                future: boolean;
              }
            ];
          },
          arg1: MouseEvent
        ) => void;
        /** The mouseup event on a day in the `category` view. The event passed is the day object. Native mouse event is passed as a second argument. */
        "mouseup:day-category": (
          arg0: {
            date: string;
            time: string;
            year: number;
            month: number;
            day: number;
            hour: number;
            minute: number;
            weekday: number;
            hasDay: boolean;
            hasTime: boolean;
            past: boolean;
            present: boolean;
            future: boolean;
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean
            ) => number | false;
            timeDelta: (
              time: string | number | { hour: number; minute: number }
            ) => number | false;
            minutesToPixels: (minutes: number) => number;
            week: [
              {
                date: string;
                time: string;
                year: number;
                month: number;
                day: number;
                hour: number;
                minute: number;
                weekday: number;
                hasDay: boolean;
                hasTime: boolean;
                past: boolean;
                present: boolean;
                future: boolean;
              }
            ];
          },
          arg1: MouseEvent
        ) => void;
        /** The mouseup event on an event. The event passed is the day & time object. */
        "mouseup:event": (arg0: {
          event: any;
          eventParsed: {
            input: any;
            start: {
              date: string;
              time: string;
              year: number;
              month: number;
              day: number;
              hour: number;
              minute: number;
              weekday: number;
              hasDay: boolean;
              hasTime: boolean;
              past: boolean;
              present: boolean;
              future: boolean;
            };
            startIdentifier: number;
            startTimestampIdentifier: number;
            end: {
              date: string;
              time: string;
              year: number;
              month: number;
              day: number;
              hour: number;
              minute: number;
              weekday: number;
              hasDay: boolean;
              hasTime: boolean;
              past: boolean;
              present: boolean;
              future: boolean;
            };
            endIdentifier: number;
            endTimestampIdentifier: number;
            allDay: boolean;
            index: number;
            category: string;
          };
          day: {
            outside: boolean;
            index: number;
            week: [
              {
                date: string;
                time: string;
                year: number;
                month: number;
                day: number;
                hour: number;
                minute: number;
                weekday: number;
                hasDay: boolean;
                hasTime: boolean;
                past: boolean;
                present: boolean;
                future: boolean;
              }
            ];
            date: string;
            time: string;
            year: number;
            month: number;
            day: number;
            hour: number;
            minute: number;
            weekday: number;
            hasDay: boolean;
            hasTime: boolean;
            past: boolean;
            present: boolean;
            future: boolean;
          };
          outside: boolean;
          start: boolean;
          end: boolean;
          timed: boolean;
          singleline: boolean;
          overlapsNoon: boolean;
          formatTime: (time: VTimestamp, ampm: boolean) => string;
          timeSummary: () => string;
          eventSummary: () => string;
          nativeEvent: MouseEvent | TouchEvent;
        }) => void;
        /** The mouseup event at a specific interval label in the `day` view. The event passed is the day & time object. Native mouse event is passed as a second argument. */
        "mouseup:interval": (
          arg0: {
            date: string;
            time: string;
            year: number;
            month: number;
            day: number;
            hour: number;
            minute: number;
            weekday: number;
            hasDay: boolean;
            hasTime: boolean;
            past: boolean;
            present: boolean;
            future: boolean;
            timeToY: (
              time: string | number | { hour: number; minute: number },
              clamp: boolean
            ) => number | false;
            timeDelta: (
              time: string | number | { hour: number; minute: number }
            ) => number | false;
            minutesToPixels: (minutes: number) => number;
            week: [
              {
                date: string;
                time: string;
                year: number;
                month: number;
                day: number;
                hour: number;
                minute: number;
                weekday: number;
                hasDay: boolean;
                hasTime: boolean;
                past: boolean;
                present: boolean;
                future: boolean;
              }
            ];
          },
          arg1: MouseEvent
        ) => void;
        // /** The mouseup event at a specific time in the `day` view. The event passed is the day & time object. Native mouse event is passed as a second argument. */
        // 'mouseup:time': (
        //   arg0: {
        //     date: string
        //     time: string
        //     year: number
        //     month: number
        //     day: number
        //     hour: number
        //     minute: number
        //     weekday: number
        //     hasDay: boolean
        //     hasTime: boolean
        //     past: boolean
        //     present: boolean
        //     future: boolean
        //     timeToY: (
        //       time: string | number | { hour: number; minute: number },
        //       clamp: boolean,
        //     ) => number | false
        //     timeDelta: (
        //       time: string | number | { hour: number; minute: number },
        //     ) => number | false
        //     minutesToPixels: (minutes: number) => number
        //     week: [
        //       {
        //         date: string
        //         time: string
        //         year: number
        //         month: number
        //         day: number
        //         hour: number
        //         minute: number
        //         weekday: number
        //         hasDay: boolean
        //         hasTime: boolean
        //         past: boolean
        //         present: boolean
        //         future: boolean
        //       },
        //     ]
        //   },
        //   arg1: MouseEvent,
        // ) => void
      }
    >;
  }
}
