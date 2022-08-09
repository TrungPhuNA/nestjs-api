- name: Checkout Code
  uses: actions/checkout@v2
  - name: Install Node
  uses: actions/setup-node@v1
  with:
  node-version: ${{ matrix.node-version}}
  - run: git pull origin master
  - run: npm i
  - run: npm run build
  - run: rm -rf /var/www/tranining/reactjs-ecommerce/build/
  - run: mv /var/www/tranining/reactjs-ecommerce/_work/reactjs-ecommerce/reactjs-ecommerce/build/ /var/www/tranining/reactjs-ecommerce/build/


ON job
sudo ./svc.sh install
sudo ./svc.sh start
