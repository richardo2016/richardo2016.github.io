(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{YFNL:function(n,e,a){"use strict";a.r(e);var o=a("cDcd"),t=a.n(o),i=a("dEAq"),l=a("H1Ra"),c=t.a.memo((n=>{n.demos;return t.a.createElement(t.a.Fragment,null,t.a.createElement("div",{className:"markdown"},t.a.createElement("p",null,"\u53ea\u662f\u7f16\u8bd1\u4e00\u4e2a\u7b80\u7b80\u5355\u5355\u7684 Mac \u7a97\u53e3\u5e94\u7528, \u6ca1\u4ec0\u4e48\u5b9e\u7528\u4ef7\u503c \u2511(\uffe3\u0414 \uffe3)\u250d"),t.a.createElement(l["a"],{code:'// main.m\n#import <Cocoa/Cocoa.h>\n\nint main()\n{\n    NSAutoreleasePool* pool = [[NSAutoreleasePool alloc] init];\n    // NSApplication* app = [NSApplication sharedApplication];\n\n    //Create the main window\n    NSRect rc = NSMakeRect(0, 0, 800, 600);\n    NSUInteger uiStyle = NSTitledWindowMask | NSResizableWindowMask | NSClosableWindowMask;\n    NSBackingStoreType backingStoreStyle = NSBackingStoreBuffered;\n    NSWindow* win = [[NSWindow alloc] initWithContentRect:rc styleMask:uiStyle backing:backingStoreStyle defer:NO];\n    [win setTitle:@"\u6d4b\u8bd5\u5b57\u7b26\u4e32"];\n    [win makeKeyAndOrderFront:win];\n    [win makeMainWindow];\n\n    //Start the event loop by calling NSApp run\n    [NSApp run];\n    [pool drain];\n    return 0;\n}',lang:"unknown"}),t.a.createElement(l["a"],{code:"# makefile\nTARGET = hello\n\nCFLAGS ?= -std=c99 -Wall -Wextra -pedantic -I./\n\nTARGET_OS ?= $(OS)\nifeq ($(TARGET_OS),Windows_NT)\nelse ifeq ($(shell uname -s),Linux)\nelse ifeq ($(shell uname -s),Darwin)\n\tWEBVIEW_CFLAGS := -x objective-c\n\tWEBVIEW_LDFLAGS := -framework Cocoa -framework WebKit\nendif\n\n$(TARGET): main.m\n\t$(CC) $(CFLAGS) $(WEBVIEW_CFLAGS) main.m $(LDFLAGS) $(WEBVIEW_LDFLAGS) -o $@\n\nclean:\n\trm -f $(TARGET)\n\n.PHONY: clean",lang:"makefile"})))}));e["default"]=n=>{var e=t.a.useContext(i["context"]),a=e.demos;return t.a.useEffect((()=>{var e;null!==n&&void 0!==n&&null!==(e=n.location)&&void 0!==e&&e.hash&&i["AnchorLink"].scrollToAnchor(decodeURIComponent(n.location.hash.slice(1)))}),[]),t.a.createElement(c,{demos:a})}}}]);