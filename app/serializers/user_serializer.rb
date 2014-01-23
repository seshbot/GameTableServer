class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :email, :admin
end
