# Output directory (your public folder)
OUTDIR=.

# Default target
all: $(OUTDIR)/dynCGOL.js

# WebAssembly build for dynCGOL with async sleep support
$(OUTDIR)/dynCGOL.js: dynCGOL.c reduceSpace.c
	emcc dynCGOL.c reduceSpace.c -o $(OUTDIR)/dynCGOL.js \
	-s WASM=1 \
	-s ASYNCIFY \
	-s EXPORTED_FUNCTIONS=_main \
	-s EXPORTED_RUNTIME_METHODS=callMain,ccall,cwrap,FS_createPreloadedFile \
	-s FORCE_FILESYSTEM=1

# Clean up build artifacts
clean:
	rm -f $(OUTDIR)/dynCGOL.js $(OUTDIR)/dynCGOL.wasm $(OUTDIR)/dynCGOL.html