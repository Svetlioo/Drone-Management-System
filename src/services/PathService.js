class PathService {
  calculatePath(fromI, fromJ, toI, toJ) {
    const path = [];
    let currentI = fromI;
    let currentJ = fromJ;

    // Move diagonally
    while (currentI !== toI && currentJ !== toJ) {
      if (toI > currentI) {
        currentI++;
      } else {
        currentI--;
      }

      if (toJ > currentJ) {
        currentJ++;
      } else {
        currentJ--;
      }

      path.push({ i: currentI, j: currentJ });
    }

    // Move horizontally or vertically
    while (currentI !== toI || currentJ !== toJ) {
      if (toI > currentI) {
        currentI++;
      } else if (toI < currentI) {
        currentI--;
      }

      if (toJ > currentJ) {
        currentJ++;
      } else if (toJ < currentJ) {
        currentJ--;
      }

      path.push({ i: currentI, j: currentJ });
    }

    return path;
  }

  calculatePathWithoutDiagonal(fromI, fromJ, toI, toJ) {
    const path = [];
    let currentI = fromI;
    let currentJ = fromJ;

    while (currentI !== toI || currentJ !== toJ) {
      if (currentI !== toI) {
        if (toI > currentI) {
          currentI++;
        } else {
          currentI--;
        }
        path.push({ i: currentI, j: currentJ });
      }

      if (currentJ !== toJ) {
        if (toJ > currentJ) {
          currentJ++;
        } else {
          currentJ--;
        }
        path.push({ i: currentI, j: currentJ });
      }
    }

    return path;
  }
}

export default PathService;
